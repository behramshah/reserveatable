import './listelement.css'

function ListElement(restaurant) {

    console.log(restaurant)

  return (
    <div>
      <h2>{restaurant.restaurant.restaurantName}</h2>
      <button>Book</button>
    </div>
  );
}

export default ListElement;