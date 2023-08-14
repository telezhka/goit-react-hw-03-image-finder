import React, { Component } from 'react';
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery';
import { SearchForm } from './Searchbar';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.inputValue}`);
    // Проп, який передається формі для виклику під час сабміту
    // this.props.onSubmit({ ...this.state });
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `?q=${this.search}&page=1&key=37812301-bb78e35e415e6149d67a423b2&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({
      pictures: response.data.hits,
      isLoading: false,
    });
    console.log(response);
  }

  render() {
    const { pictures, isLoading, inputValue } = this.state;
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
      </div>
    );
  }
}
