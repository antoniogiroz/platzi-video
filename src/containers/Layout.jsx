import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className='layout'>
    {children}
    <Footer />
  </div>
);

export default Layout;
