/**
 * useFetch hook reusable
 * Author @kevinbrian-cortex
 */

import axios from "axios";

const useFetch = async () => {
  const response = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/photos",
  });

  return response.data;
};

export default useFetch;
