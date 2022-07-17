import axios from 'axios';

export const getStories = async () => {
  const res = await axios({
    method: 'get',
    url: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aviewint`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const ToText = (node) => {
  let tag = document.createElement('div');
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
};

export const ConvertDateAndTime = (date) => {
  return new Date(date).toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};
