import NavBar from '../components/organisms/Header'
import Footer from '../components/organisms/Footer';

import Loading from '@/app/loading';
import { Suspense } from 'react';

const Layout = ({ children }) => {






  return (

    <div>

      <main className='main container'>
      
        <NavBar />
  <Suspense fallback={<div>Loading ...</div>}>

        {children}
</Suspense>
        <Footer />
      </main>

    </div>

  );
};

export default Layout;