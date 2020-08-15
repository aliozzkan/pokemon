import { useState } from 'react';

const initialValue = {
  status: null,
  data: null,
  error: null,
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

// Hook
export const useFetchData = () => {
  const [_fetchData, _setFetchData] = useState(initialValue);

  function pending() {
    _setFetchData({
      ...initialValue,
      status: 'pending',
      isPending: true,
    });
  }

  function fulfilled(data) {
    _setFetchData({
      ...initialValue,
      status: 'fulfilled',
      data,
      isFulfilled: true,
    });
  }

  function rejected(error) {
    _setFetchData({
      ...initialValue,
      status: 'rejected',
      error,
      isRejected: true,
    });
  }

  function reset() {
    _setFetchData(initialValue);
  }

  return [_fetchData, { pending, fulfilled, rejected, reset }];
};
