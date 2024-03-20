import {useState} from 'react';

import './search.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [bookingDate, setBookingDate] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setBookingDate(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Implement search functionality here
      console.log(`Searching for ${searchTerm} with booking date: ${bookingDate}`);
    };
  
    return (
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          className='search-input'  
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <input
          className='search-input'
          type="date"
          value={bookingDate}
          onChange={handleDateChange}
        />
        <button className='search-button' type="submit">Search</button>
      </form>
    );
}

export default Search;