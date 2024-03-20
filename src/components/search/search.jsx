import PropTypes from 'prop-types';
import './search.css';

function Search({ setSearchTerm, setBookingDate, handleSubmit }) {
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='search-input'
        type="text"
        placeholder="Search restaurants..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        className='search-input'
        type="date"
        onChange={(e) => setBookingDate(e.target.value)}
      />
      <button className='search-button' type="submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  setBookingDate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Search;