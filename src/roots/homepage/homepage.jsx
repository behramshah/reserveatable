import { useState } from 'react';
import Search from "../../components/search/search";
import List from "../../components/list/list";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`Endpoint?searchTerm=${searchTerm}&bookingDate=${bookingDate}`);
    const data = await response.json();
    setSearchResults(data);
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