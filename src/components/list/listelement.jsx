import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './listelement.css'

function ListElement({ restaurant }) { 

  const { restaurantName, address, tablesAvailable, guestOverviews } = restaurant;
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/book', { state: { restaurant } })
  }

  return (
    <div className='listelement'>
      <div className='listInfo'>
        <h3 className='elementTitle'>{restaurantName}</h3>
        <span className='infopiece'>{`Address: ${address}`}</span>
        <span className='infopiece'>{`Reviews: ${guestOverviews.length}`}</span>
        <span className='infopiece'>{`${tablesAvailable} tables are free`}</span>
      </div>
      <button className='book_button' onClick={handleBooking}>Book</button>
    </div>
  );
}

ListElement.propTypes = {
  restaurant: PropTypes.shape({
    restaurantName: PropTypes.string,
    address: PropTypes.string,
    tablesAvailable: PropTypes.number,
    guestOverviews: PropTypes.arrayOf(PropTypes.object)
  }),
};

export default ListElement;