import React from 'react';
import PropTypes from 'prop-types';
export const Button = ({ onClick, hasImages }) => {
  return (
    hasImages && (
      <button
        type="button"
        className="load-more-button"
        onClick={onClick}
        style={{
          position: 'fixed',
          bottom: '20px',
        }}
      >
        Load more
      </button>
    )
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  hasImages: PropTypes.bool,
};
