import React from 'react';

import H1 from '../components/Typography/H1';
import H3 from '../components/Typography/H3';
import H5 from '../components/Typography/H5';
import H6 from '../components/Typography/H6';
import P from '../components/Typography/Paragraph';
// import Button from '../components/Button';
import TitleBlock from '../components/TitleBlock/TitleBlock';

import Navigation from '../components/Navigation/NavigationBar';
import Banner from '../components/Banner';
import Concept from '../components/Concept/Concept';
import Products from '../components/Products/Products';
import Team from '../components/Team/Team';
import Achievements from '../components/Achievements/Achievements';
// import About from '../components/About/About';

import {COLORS, TYPEOGRAPHY, SPACING} from '../lib/styles';

import I from '../components/Typography/italic';

const Home = (props) => {
  return (
    <div>
      <Navigation />

      <span id="banner" className="anchorOffset" />
      <Banner />

      <div className="contentBlock">
        <span id="concept" className="anchorOffset" />
        <TitleBlock>
          <H3>
            Concepto
          </H3>
        </TitleBlock>
        <Concept />
      </div>

      <div className="contentBlock">
        <span id="products" className="anchorOffset" />
        <Products />
      </div>

      <div className="contentBlock">
        <span id="team" className="anchorOffset" />
        <TitleBlock>
          <H3>Equipo</H3>
        </TitleBlock>
        <Team />
      </div>

      <div className="contentBlock">
        <span id="achievements" className="anchorOffset" />
        <TitleBlock>
          <H3>Logros</H3>
        </TitleBlock>
        <Achievements />
      </div>

      <style jsx>{`
        .anchorOffset {
          display: block;
          position: relative;
          top: -190px;
          visibility: hidden;
        }

        .contentBlock {
          margin: ${SPACING.xl} auto ${SPACING.sm} auto;
        }

      `}
      </style>
    </div>
  );
};

export default Home;
