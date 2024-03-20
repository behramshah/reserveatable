import { Link, Outlet } from 'react-router-dom';

import './CustomNavigation.css'

function CustomNavigation() {

  return (
    <>
      <div className='navcontainer'>
        <div className='logocontainer'>
          <Link className='navlink' to={`/`}>Home</Link> 
        </div>
        <div className='navlinks'>
          <Link className='navlink' to={`/auth`}>Sign In</Link>
          <Link className='navlink' to={`/homepage`}>Restraunts</Link>
          <Link className='navlink' to={`/book`}>Book</Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default CustomNavigation
