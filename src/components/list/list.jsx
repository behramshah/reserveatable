import { useState } from 'react';
import ListElement from './listelement';
import Pagination from '../pagination/pagination';
import PropTypes from 'prop-types';

import './list.css';
import mockrestraunts from '../../assets/mockrestraunts.json';

function List({ searchResults, itemsPerPage }) {
  // Temporarily using mock data for development
  searchResults = mockrestraunts;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <ul>
        {currentItems.map((restaurant) => (
          <ListElement key={restaurant.restaurantId} restaurant={restaurant} />
        ))}
      </ul>
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={searchResults.length} 
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </>
  );
}

List.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      restaurantName: PropTypes.string,
      address: PropTypes.string,
      tablesAvailable: PropTypes.number,
      guestOverviews: PropTypes.arrayOf(PropTypes.object)
    })
  ).isRequired,
};

export default List;