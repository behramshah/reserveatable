import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user-context.jsx';

const CustomLink = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const handleSignOut = () => {
    // Logic for signing out
    setCurrentUser(null);
    // Redirect to home or any other actions needed after sign out
  };

  return (
    <Link className='navlink' to={currentUser ? '/' : '/auth'} onClick={currentUser ? handleSignOut : null}>
      {currentUser ? 'Sign Out' : 'Sign In'}
    </Link>
  );
};

export default CustomLink;