import React from 'react';

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
