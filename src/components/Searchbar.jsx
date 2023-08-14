import React from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <header
      className="searchbar"
      style={{
        position: 'fixed',
        top: 0,
      }}
    >
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
SearchForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputValue: PropTypes.string,
};
