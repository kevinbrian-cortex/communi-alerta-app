/**
 * useFetch hook reusable
 * Author @kevinbrian-cortex
 */

import axios from "axios";

const useFetch = async (url: string) => {
  const response = await axios({
    method: "GET",
    url: url,
  });

  return response.data;
};

export default useFetch;
