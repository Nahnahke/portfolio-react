import React from 'react';
import Header from 'components/Header/Header';
import Tech from 'components/Tech';
import FeaturedProjectsList from 'components/Projects/FeaturedProjectsList';
import Skills from 'components/Skills';
import Footer from 'components/Footer';
import ScrollToTop from 'components/lib/ScrollToTop';

export const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Tech />
      <FeaturedProjectsList />
      <Skills />
      <Footer />
    </>
  )
};
