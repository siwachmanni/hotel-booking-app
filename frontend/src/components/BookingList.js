import React, { useEffect, useState } from 'react';
import { getBookings } from '../services/api';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then(data => setBookings(data));
  }, []);

  return (
    <ul>
      {bookings.map(b => (
        <li key={b.bookingId}>
          {b.guestName} – {b.roomType} ({b.checkIn} to {b.checkOut})
        </li>
      ))}
    </ul>
  );
};

export default BookingList;