import React from 'react';

import H1 from './Typography/H1';
import H5 from './Typography/H5';

import { COLORS, TEXTSIZE } from '../lib/styles';

const Banner = (props) => {
  return (
    <div id="bannerWrapper">
      {/* <img src="/static/images/loader.svg" width="250px"/> */}
      <H1 style={{ color: COLORS.texts.secundary, 'textShadow': '-4px 2px black' }}>Sexy Candies</H1>

      <H5 light style={{ 'fontStyle': 'italic', 'fontSize': '3.6em', 'textShadow': '-3px 0px black' }} >Always Tasty!</H5>
      <style jsx>{`
        #bannerWrapper{
          background-color: ${COLORS.shaders.dark};
          height: 100vh;
          width: 100vw;

          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }

      `}</style>
    </div>
  );
};

export default Banner;
