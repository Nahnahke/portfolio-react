import React from 'react';
import Header from 'Header/Header';
import Tech from 'Tech';
import FeaturedProjectsList from 'Projects/FeaturedProjectsList';
import Skills from 'Skills';
import Footer from 'Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <FeaturedProjectsList />
      <Skills />
      <Footer />
    </>
  )
};
