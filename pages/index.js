import React from 'react';

import NavigationBar from '../components/Navigation/NavigationBar';
import Woodland from '../components/Woodland';
import Woodpane from '../components/Woodpane';
import H1 from '../components/Typography/H1';
import H2 from '../components/Typography/H2';
import H5 from '../components/Typography/H5';
import P from '../components/Typography/Paragraph';
import Button from '../components/Button';

import Banner from '../components/Banner';
import Services from '../components/Services/Services';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Collaborators from '../components/Collaborators/Collaborators';

import {COLORS} from '../lib/styles';

const Home = (props) => {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <span id="" className="anchorOffset" />

      <style jsx>{`
        .try {
          height: 400px;
        }
        .anchorOffset {
          display: block;
          position: relative;
          top: -140px;
          visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;
