import React from 'react';

import P from '../Typography/Paragraph';
import I from '../Typography/italic';

import {COLORS, TYPEOGRAPHY, SPACING} from '../../lib/styles';

const Achievementa = () => (
  <div id="achievementsBlock" style={{ width: '80vw', margin: '24px auto' }}>
    <div id="achievementsContent">


      <P>
        Somart ha ganando varias competencias entre sus pares,
        tales como la <I>Tarjeta de Navidad</I> la cual elaboró en chocolate,
        la <I>casita de jengibre</I> y la competencia de <I>coquito navideño</I>,
        elaborado de cocoa, servido en vasos de chocolate.
      </P>
    </div>


    <div id="achievementsImages">

    </div>

    <style jsx>
      {`
        #achievementsBlock {
          display: flex;
          flex-flow: nowrap;
          align-items: flex-start;
          justify-content: space-between;

          height: 450px;
          width: 85vw;
          margin: ${SPACING.lg} auto;
        }

        #achievementsContent {
          width: 55%;
        }

        #achievementsImages {
          height: 100%;
          width: 40%;
          background: url('/static/images/gingerbreadhouse.jpg') center no-repeat;
          background-size: contain;
        }
      `}
    </style>
  </div>
);

export default Achievementa;
