CREATE TABLE Bookings (
    bookingId INT IDENTITY(1,1) PRIMARY KEY,
    guestName NVARCHAR(100) NOT NULL,
    roomType NVARCHAR(50) NOT NULL,
    checkIn DATE NOT NULL,
    checkOut DATE NOT NULL,
    status NVARCHAR(20) NOT NULL DEFAULT 'confirmed',
    createdAt DATETIME DEFAULT GETDATE()
);