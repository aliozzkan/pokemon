import React from 'react';
import spinnerGif from '@/assets/gifs/spinner.gif';

function ActivityIndicator() {
  return (
    <div className="spinner">
      <img src={spinnerGif} alt="Spinner" />
    </div>
  );
}

export default ActivityIndicator;
