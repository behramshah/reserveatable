import ListElement from './listelement';

import './list.css'
import mockrestraunts from '../../assets/mockrestraunts.json'

function List() {

//   const data = JSON.parse(mockrestraunts)
   console.log(mockrestraunts)

  return (
    <ul>
      {mockrestraunts.map((restaurant) => (
        <ListElement key={restaurant.restaurantId} restaurant={restaurant} />
      ))}
    </ul>
  );
}

export default List;