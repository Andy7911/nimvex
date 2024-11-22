import NavBar from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer';
import { useState, useEffect, Suspense } from 'react';
import Loading from '@/app/loading';

const Layout = ({ children }) => {






  return (

    <div>

      <main className='main container'>
      
        <NavBar />
  

        {children}

        <Footer />
      </main>

    </div>

  );
};

export default Layout;