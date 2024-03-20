import { useLocation, useNavigate } from 'react-router-dom';

import './notification.css';

function NotificationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state;

  const handleEditBooking = () => {
    navigate('/book', { state: { bookingDetails } });
  };

  const handleShareBooking = () => {
    const mailSubject = encodeURIComponent('Booking Confirmation Details');
    const mailBody = encodeURIComponent(
      `Here are my booking details:\n\n` +
      `Restaurant Name: ${bookingDetails.restaurantName}\n` +
      `Date: ${bookingDetails.selectedDate}\n` +
      `Time: ${bookingDetails.selectedTime}\n` +
      `Guest Count: ${bookingDetails.guestCount}\n` +
      `Special Requests: ${bookingDetails.specialRequests}`
    );

    window.location.href = `mailto:?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className='notification-container'>
      <h1 className='notification-title'>Booking Confirmation</h1>
      <p className='notification-text'>Your table at <span className='notification-highlight'>{bookingDetails.restaurantName}</span> is booked for <span className='notification-highlight'>{bookingDetails.selectedDate}</span> at <span className='notification-highlight'>{bookingDetails.selectedTime}</span>.</p>
      <p className='notification-text'>Guest count: <span className='notification-highlight'>{bookingDetails.guestCount}</span></p>
      <p className='notification-text'>Special requests: <span className='notification-highlight'>{bookingDetails.specialRequests}</span></p>
      <button className='notification-button' onClick={handleShareBooking}>Share Booking Details</button>
      <button className='notification-button' onClick={handleEditBooking}>Edit Booking</button>
      <button className='notification-button'>View Booking</button>
    </div>
  );
}

export default NotificationPage;