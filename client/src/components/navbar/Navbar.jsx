import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { UserContext } from '../../context/user/UserProvider';
import { FaUserCircle } from 'react-icons/fa';
import { USER_ACTION } from '../../context/user/UserReducer';

const Navbar = () => {
  const { user, dispatch } = useContext(UserContext);

  // Logout function
  const logout = () => {
    dispatch({ type: USER_ACTION.LOGOUT });
    localStorage.removeItem('user');
  };

  return (
    <nav className="navbar">
      <section className="navbar-container">
        <h1 className="title">
          <NavLink to={'/'} className={'title-link'}>
            LisaHotel
          </NavLink>
        </h1>
        {/* Navigation to home page, about page and Hotels page */}
        <ul className="items">
          <li className="item">
            <NavLink to={'/'} className={'link'}>
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink to={'/about'} className={'link'}>
              About{' '}
            </NavLink>
          </li>
          <li className="item">
            <NavLink to={'/rooms'} className={'link'}>
              Rooms
            </NavLink>
          </li>

          <li className="item">
            <NavLink to={'/contact'} className={'link'}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Navigation to singup page and login page */}
        {user ? (
          <div className="user-info">
            <p className="userName">
              {user.firstName} {user.lastName}
            </p>
            <FaUserCircle className="user-icon" onClick={logout} />
          </div>
        ) : (
          <ul className="signup-login">
            <li className="account-item">
              <NavLink to={'/register'} className={'link'}>
                Sign Up
              </NavLink>
            </li>
            <li className="account-item">
              <NavLink to={'/login'} className={'link'}>
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
