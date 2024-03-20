import { useState } from 'react';
import Search from "../../components/search/search";
import List from "../../components/list/list";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`Endpoint?searchTerm=${searchTerm}&bookingDate=${bookingDate}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };
  

  return (
    <>
      <Search 
        setSearchTerm={setSearchTerm} 
        setBookingDate={setBookingDate} 
        handleSubmit={handleSubmit}
      />
      <List searchResults={searchResults} itemsPerPage={2} />
    </>
  );
}

export default Homepage;