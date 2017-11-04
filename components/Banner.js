import React from 'react';

import H1 from './Typography/H1';
import H5 from './Typography/H5';

import { COLORS, TEXTSIZE } from '../lib/styles';

const Banner = (props) => {
  return (
    <div id="bannerWrapper">
      <div id="banner__background">
        <div id="banner__border">
          <H1 style={{ color: COLORS.texts.secundary, fontSize: '9em', lineHeight: '1.2' }}>Sexy Candies</H1>

          <H5 light
            style={{
              color: COLORS.texts.contrast,
              fontStyle: 'italic',
              fontSize: '5.2em',
              lineHeight: '1.2',
            }}
          >
            Always Tasty!
          </H5>

        </div>
      </div>

      <style jsx>
        {`
          #bannerWrapper {

            background-color: '';

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

          #banner__border {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
