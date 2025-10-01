const express = require('express');
const { connectDB } = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api', bookingRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Backend is healthy');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));