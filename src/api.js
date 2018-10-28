import axios from 'axios';

const API_URL = 'https://tbc/api';

export const fetchReview = productId => axios
      .get(`${API_URL}/review/${productId}`)
      .then(({ data: { review } }) => ({ review }));

export const fetchNews = productId => axios
      .get(`${API_URL}/news/${productId}`)
      .then(({ data: { news } }) => ({ news }));
