import axios from 'axios';

export const getStories = async () => {
  console.log(process.env.NAME);
  console.log(process.env.NEXT_PUBLIC_MEDIUM_API_KEY);
  const res = await axios({
    method: 'get',
    url: `https://cors-anywhere.herokuapp.com/https://medium.com/@aviewint/latest`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MEDIUM_API_KEY}`,
    },
    proxy: true,
  });
  return res;
};
