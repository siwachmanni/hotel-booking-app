# 🖥️ Hotel Booking App – Frontend

This is the **React-based frontend** for the Hotel Booking App. It provides a user-friendly interface for browsing, booking, and managing hotel reservations.

## 🚀 Features

- Booking form with validation
- Booking list display with live data
- API integration with backend services
- Modular components for scalability
- Responsive design for desktop and mobile

## 🛠️ Tech Stack

- **React**
- **Axios** (for API calls)
- **React Router** (optional for navigation)
- **CSS/Bootstrap** (for styling)

## 📁 Folder Structure
frontend/ ├── public/ │   └── index.html ├── src/ │   ├── App.js │   ├── index.js │   ├── components/ │   │   ├── BookingForm.js │   │   └── BookingList.js │   └── services/ │       └── api.js

## 📄 Setup Instructions

```bash
cd frontend
npm install
npm start
# This will launch the app at http://localhost:3000.

API Integration
The frontend communicates with the backend via REST API endpoints defined in src/services/api.js.
