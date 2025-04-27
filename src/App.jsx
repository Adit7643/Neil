import React from 'react';
import FirstSection from './FirstSection'; // Assuming this is your Home component
import Footer from './Footer';
import ThirdSection from './ThirdSection';
import SecondSection from './SecondSection';
import FourthSection from './FourthSection'; // Assuming this is your Projects component
import NavSection from './NavSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';

function App() {
  return (
    <>
      <NavSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </>
  );
}

export default App;
