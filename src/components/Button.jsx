import React from 'react';
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
