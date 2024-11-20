import NavBar from './organisms/Header'
import Footer from './organisms/Footer';
import { useState, useEffect, Suspense } from 'react';
import Loading from '@/app/loading';


const Layout = ({ children }) => {






  return (

    <div>

      <main className='main container'>
      
        <NavBar />
  <Suspense fallback={<Loading/>}> 
        {children}
</Suspense>
        <Footer />
      </main>

    </div>

  );
};

export default Layout;