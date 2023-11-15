import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};
export const useFetch = (options) => {
  const [data, setData] = useState(null);

  const savedOnSuccess = useCallbackRef(options.onSuccess);

  useEffect(() => {
    console.log("useFetch useEffect");
    if (options.url) {
      fetch(options.url)
        .then((resp) => resp.json())
        .then((data) => {
          savedOnSuccess.current?.(data);
          setData(data);
        });
    }
  }, [options.url]);

  return {
    data,
  };
};
