# Hotel Booking App – Backend (Azure SQL)

This is the backend API for the Hotel Booking App, built using Node.js, Express, and Azure SQL Database. It follows a modular structure suitable for enterprise-grade deployments.

---

## Folder Structure

backend/
├── src/
│   ├── controllers/        (Business logic)
│   ├── routes/             (API route definitions)
│   ├── config/             (Azure SQL DB connection)
│   └── app.js              (Main app entry point)
├── .env                    (Environment variables)
├── package.json            (Dependencies and metadata)
└── README.md               (Project documentation)

---

## Setup Instructions

1. Install dependencies:
npm install

2. Create a `.env` file in the backend folder with your Azure SQL credentials:
PORT=5000 DB_USER=your_sql_user DB_PASS=your_sql_password DB_SERVER=your_sql_server.database.windows.net DB_NAME=hotelApp


3. Start the server:
npm start

---

## API Endpoints

- `POST /api/bookings` – Create a new booking
- `GET /api/bookings` – Retrieve all bookings
- `GET /health` – Health check endpoint

---

## Tech Stack

- Node.js
- Express
- Azure SQL Database
- mssql (SQL client)
- dotenv

---

## Notes

- Hosted on Azure VM for backend logic
- Uses Azure SQL PaaS for database
- Designed for monolithic 3-tier architecture
- Error handling and health check included
