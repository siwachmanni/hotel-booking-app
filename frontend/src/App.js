import React from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

function App() {
  return (
    <div>
      <h1>Hotel Booking App</h1>
      <BookingForm />
      <BookingList />
    </div>
  );
}

export default App;