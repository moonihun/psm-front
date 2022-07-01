import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

interface LayourProps {
  children: React.ReactNode;
}

function Layout({ children }: LayourProps) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      {/* <Banner />  */}
      <main className='flex-auto'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
