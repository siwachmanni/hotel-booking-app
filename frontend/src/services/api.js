import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const createBooking = async (data) => {
  await axios.post(`${BASE_URL}/bookings`, data);
};

export const getBookings = async () => {
  const res = await axios.get(`${BASE_URL}/bookings`);
  return res.data;
};