const { sql } = require('../config/db');

exports.createBooking = async (req, res) => {
  const { guestName, roomType, checkIn, checkOut } = req.body;
  try {
    await sql.query`INSERT INTO Bookings (guestName, roomType, checkIn, checkOut, status) VALUES (${guestName}, ${roomType}, ${checkIn}, ${checkOut}, 'confirmed')`;
    res.status(201).json({ message: 'Booking created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Bookings`;
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};