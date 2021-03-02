import React from 'react';
import Common from '../Common';
import web from '../img/rocket.jpg';

const Home = () => {
  return (
    <div>
      <Common
        name="Grow your skill with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </div>
  );
}

export default Home;
