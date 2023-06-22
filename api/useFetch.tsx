/**
 * useFetch hook reusable
 * Author @kevinbrian-cortex
 */

import axios from "axios";

const useFetch = async () => {
  const response = await axios({
    method: "GET",
    url: "https://picsum.photos/v2/list",
  });

  return response.data;
};

export default useFetch;
