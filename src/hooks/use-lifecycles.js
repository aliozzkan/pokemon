import { useState, useEffect, useLayoutEffect } from 'react';

export function useMounted(func) {
  const [_mounted, _setMounted] = useState();
  const [_unMounted, _setUnmounted] = useState();

  useEffect(() => {
    if (!_mounted && !_unMounted) {
      func();
      _setMounted(true);
    }
    return () => {
      _setUnmounted(true);
    };
  });
}
export function useBeforeMount(func) {
  const [_mounted, _setMounted] = useState();
  const [_unMounted, _setUnmounted] = useState();

  useLayoutEffect(() => {
    if (!_mounted && !_unMounted) {
      func();
      _setMounted(true);
    }
    return () => {
      _setUnmounted(true);
    };
  });
}

export function useUnmounted(func) {
  useEffect(() => {
    return () => {
      func();
    };
  });
}

export function useUpdated(func, arr = undefined) {
  const [_mounted, _setMounted] = useState();
  const [_unMounted, _setUnmounted] = useState();

  useEffect(() => {
    if (!_mounted && !_unMounted) {
      func();
      _setMounted(true);
    }
    return () => {
      _setUnmounted(true);
    };
  }, arr);
}
