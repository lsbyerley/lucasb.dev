import axios from 'axios';

// const fetcher = (url) => axios.get(url).then((res) => res.data);

const fetcher = async (url) => {
  let response;

  try {
    response = await axios.get(url);
  } catch (error) {
    console.error('fetcher error: ', error);
    return error;
  }

  return response.data;
};

export default fetcher;
