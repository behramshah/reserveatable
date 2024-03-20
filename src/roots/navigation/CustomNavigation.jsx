import { Link, Outlet, useLocation } from 'react-router-dom';
import Carousel from '../../components/carousel/carousel.jsx';

import './CustomNavigation.css';
import mockhotoffers from '../../assets/mockhotoffers.json'

function CustomNavigation() {
  const location = useLocation();

  return (
    <>
      <div className='navcontainer'>
        <div className='logocontainer'>
          <Link className='navlink' to={`/`}>Home</Link> 
        </div>
        <div className='navlinks'>
          <Link className='navlink' to={`/auth`}>Sign In</Link>
          <Link className='navlink' to={`/restraunts`}>Restraunts</Link>
        </div>
      </div>
      {location.pathname === '/' && <Carousel items={mockhotoffers}/>} 
      <Outlet/>
    </>
  )
}

export default CustomNavigation