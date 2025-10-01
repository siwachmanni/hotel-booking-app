import React, { useState } from 'react';
import { createBooking } from '../services/api';

const BookingForm = () => {
  const [form, setForm] = useState({
    guestName: '',
    roomType: '',
    checkIn: '',
    checkOut: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await createBooking(form);
    alert('Booking submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="guestName" placeholder="Guest Name" onChange={handleChange} required />
      <input name="roomType" placeholder="Room Type" onChange={handleChange} required />
      <input name="checkIn" type="date" onChange={handleChange} required />
      <input name="checkOut" type="date" onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;