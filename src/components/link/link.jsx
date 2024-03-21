import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user-context.jsx';
import { signOutUser } from '../../utils.js/firebase.js';

const CustomLink = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const handleSignOut = async() => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Link className='navlink' to={currentUser ? '/' : '/auth'} onClick={currentUser ? handleSignOut : null}>
      {currentUser ? 'Sign Out' : 'Sign In'}
    </Link>
  );
};

export default CustomLink;