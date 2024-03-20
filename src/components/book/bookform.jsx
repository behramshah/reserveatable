import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './bookform.css';

function BookForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { restaurant } = location.state || {};

  const [selectedDate, setSelectedDate] = useState(restaurant.availableDates[0]);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [guestCount, setGuestCount] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');

  const mockbookingdetails = {
    restaurantName: 'Mock restraunt',
    selectedDate: '01.04.2024',
    selectedTime: '12:00',
    guestCount: '2',
    specialRequests: 'no smoking table'
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestCountChange = (event) => {
    setGuestCount(event.target.value);
  };

  const handleSpecialRequestsChange = (event) => {
    setSpecialRequests(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/notification', { state: { bookingDetails: mockbookingdetails } });
    // try {
    //   const response = await fetch('Endpoint_URL', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       restaurantId: restaurant.restaurantId,
    //       selectedDate,
    //       selectedTime,
    //       guestCount,
    //       specialRequests,
    //     }),
    //   });

    //   if (response.ok) {
    //     const bookingDetails = await response.json();
    //     navigate('/notification', { state: { bookingDetails } });
    //   } else {
    //     // Handle errors, e.g., show an error message to the user
    //     console.error('Failed to submit booking:', response.statusText);
    //   }
    // } catch (error) {
    //   // Handle network errors, e.g., show an error message to the user
    //   console.error('Network error:', error.message);
    // }
  };

  return (
    <div className='bookform-container'>
      <h1 className='bookform-title'>Book a Table at {restaurant.restaurantName}</h1>
      <form className='bookform' onSubmit={handleSubmit}>
        <label className='bookform-label'>
          Choose a date:
          <select className='bookform-select' value={selectedDate} onChange={handleDateChange}>
            {restaurant.availableDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </label>
        <label className='bookform-label'>
          Choose a time:
          <input
            className='bookform-input'
            type='time'
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </label>
        <label className='bookform-label'>
          Number of guests:
          <input
            className='bookform-input'
            type='number'
            value={guestCount}
            onChange={handleGuestCountChange}
            min='1'
            max={restaurant.tablesAvailable}
          />
        </label>
        <label className='bookform-label'>
          Special requests:
          <textarea
            className='bookform-textarea'
            value={specialRequests}
            onChange={handleSpecialRequestsChange}
          />
        </label>
        <button className='bookform-button' type='submit'>Submit Booking</button>
      </form>
    </div>
  );
}

export default BookForm;