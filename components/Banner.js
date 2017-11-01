import React from 'react';

import H1 from './Typography/H1';
import H5 from './Typography/H5';

import { COLORS, TEXTSIZE } from '../lib/styles';

const Banner = (props) => {
  return (
    <div id="bannerWrapper">
      <div id="banner__background">
        <H1 style={{ color: COLORS.texts.secundary, 'textShadow': '-4px 2px black' }}>Sexy Candies</H1>

        <H5 light style={{ 'fontStyle': 'italic', 'fontSize': '3.6em', 'textShadow': '-3px 0px black' }} >Always Tasty!</H5>
      </div>

      <style jsx>
        {`
          #bannerWrapper {

            background-color: ${COLORS.shaders.dark} ;

            height: 100vh;
            width: 100vw;

            margin: 0;


          }

          #banner__background {
            background-image: url('/static/images/polkadot.svg');
            background-repeat: round;
            background-size: 350px;

            background-clip: content-box;

            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;

            height: 100%;

          }
        `}
      </style>
    </div>
  );
};

export default Banner;
