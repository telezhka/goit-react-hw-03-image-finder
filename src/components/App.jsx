import React, { Component } from 'react';
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery';
import { SearchForm } from './Searchbar';
import { Button } from './Button';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    inputValue: '',
    page: 1,
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = async evt => {
    evt.preventDefault();
    console.log(`Search query: ${this.state.inputValue}`);

    this.setState({ isLoading: true });

    try {
      const response = await axios.get(
        `?q=${this.state.inputValue}&page=1&key=37812301-bb78e35e415e6149d67a423b2&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState({
        pictures: response.data.hits,
        isLoading: false,
      });
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ isLoading: false });
    }
  };
  loadMoreImages = async evt => {
    // evt.preventDefault();
    const { inputValue, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const response = await axios.get(
        `?q=${inputValue}&page=${
          page + 1
        }&key=37812301-bb78e35e415e6149d67a423b2&image_type=photo&orientation=horizontal&per_page=12`
      );
      // evt.preventDefault();
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...response.data.hits],
        isLoading: false,
        page: prevState.page + 1,
      }));
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ isLoading: false });
    }
  };
  render() {
    const { pictures, isLoading, inputValue } = this.state;
    const hasImages = pictures.length > 0;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {
          <SearchForm
            inputValue={inputValue}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          ></SearchForm>
        }
        {isLoading ? (
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        ) : (
          <ImageGallery pictures={pictures} />
        )}
        <Button onClick={this.loadMoreImages} hasImages={hasImages} />
      </div>
    );
  }
}
