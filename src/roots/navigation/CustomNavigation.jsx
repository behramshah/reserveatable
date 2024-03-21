import { Link, Outlet, useLocation } from 'react-router-dom';
import Carousel from '../../components/carousel/carousel.jsx';
import { UserProvider } from '../../contexts/user-context.jsx';
import CustomLink from '../../components/link/link.jsx';

import './CustomNavigation.css';
import mockhotoffers from '../../assets/mockhotoffers.json'

function CustomNavigation() {
  const location = useLocation();

  return (
    <>
    <UserProvider>
      <div className='navcontainer'>
        <div className='logocontainer'>
          <Link className='navlink' to={`/`}>Home</Link> 
        </div>
        <div className='navlinks'>
          <CustomLink/>
          <Link className='navlink' to={`/restraunts`}>Restraunts</Link>
        </div>
      </div>
      {location.pathname === '/' && <Carousel items={mockhotoffers}/>} 
      <Outlet/>
    </UserProvider>
    </>
  )
}

export default CustomNavigation