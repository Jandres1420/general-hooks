import { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = (baseURL) => {
  const [state, setState] = useState({
    data: null,
    isLoadin: true,
    hasError: null,
  });
  const getFetch = async () => {
    setState({ ...state, isLoadin: true });
    let hello;
    const resp = await axios.get(baseURL).then((response) => {
      setState({ data: response.data, isLoadin: false, hasError: null });
    });
  };
  useEffect(() => {
    getFetch();
    return () => {};
  }, [baseURL]);

  return {
    data: state.data,
    isLoadin: state.isLoadin,
    hasError: state.hasError,
  };
};
