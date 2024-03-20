import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './bookform.css';

function BookForm() {
  const location = useLocation();
  const { restaurant } = location.state || {};

  const [selectedDate, setSelectedDate] = useState(restaurant.availableDates[0]);
  const [guestCount, setGuestCount] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleGuestCountChange = (event) => {
    setGuestCount(event.target.value);
  };

  const handleSpecialRequestsChange = (event) => {
    setSpecialRequests(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit booking information here
    console.log({
      restaurantId: restaurant.restaurantId,
      selectedDate,
      guestCount,
      specialRequests,
    });
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