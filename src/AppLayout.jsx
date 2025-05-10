import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function AppLayout({ children }) {
  const location = useLocation();
  const role = localStorage.getItem('role');

  const hideNavbarPaths = ['/', '/login', '/signup'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && role && <Navbar />}
      {children}
    </>
  );
}

export default AppLayout;
