import React from 'react';

import H1 from '../components/Typography/H1';
import H2 from '../components/Typography/H2';
import H5 from '../components/Typography/H5';
import H6 from '../components/Typography/H6';
import P from '../components/Typography/Paragraph';
// import Button from '../components/Button';

import Navigation from '../components/Navigation/NavigationBar';
import Banner from '../components/Banner';
import Concept from '../components/Concept/Concept';
// import About from '../components/About/About';

import {COLORS, TYPEOGRAPHY, SPACING} from '../lib/styles';

import I from '../components/Typography/italic';

const Home = (props) => {
  return (
    <div>
      <Navigation />

      <span id="" className="anchorOffset" />
      <Banner />

      <span id="concept" className="anchorOffset" />
      <Concept />

      <span id="team" className="anchorOffset" />
      <div style={{ width: '80vw', margin: '24px auto' }}>
        <H5>Equipo</H5>

        <P>
          Somart Martos es la fundadora y chef de nuestra cocina.
          Adquirió su grado técnico en Panadería y Repostería Internacional
          en Enero de 2016,
          del Instituto de Banca y Comercio de Puerto Rico con Altos Honores.
        </P>

        <P>
          Siendo la cocina otra de sus pasiones,
          Somart comenzó un Grado Asociado en Artes Culinarias en la
          Universidad del Este y está pautada a finalizar el grado en
          Mayo de 2017.
        </P>

        <P>
          Por muchos años <span style={{ fontFamily: TYPEOGRAPHY.header.title, fontSize: '1.2em' }}>Sexy Candies</span> ha sido una empresa familiar,
          se considera un futuro donde se expanda la familia.
        </P>
      </div>

      <span id="logros" className="anchorOffset" />
      <div id="achievementsBlock" style={{ width: '80vw', margin: '24px auto' }}>
        <div id="achievementsContent">
          <H5>Logros</H5>

          <P>
            Somart ha ganando varias competencias entre sus pares,
            tales como la <I>Tarjeta de Navidad</I> la cual elaboró en chocolate,
            la <I>casita de jengibre</I> y la competencia de <I>coquito navideño</I>,
            elaborado de cocoa, servido en vasos de chocolate.
          </P>
        </div>


        <div id="achievementsImages">

        </div>
      </div>

      <style jsx>{`
        .anchorOffset {
          display: block;
          position: relative;
          top: -190px;
          visibility: hidden;
        }

        #achievementsBlock {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-around;

          height: 450px;
          width: 85vw;
          margin: ${SPACING.lg} auto;
        }

        #achievementsContent {
          width: 65%;
        }

        #achievementsImages {
          height: 70%;
          width: 25%;
          background: url('/static/images/gingerbreadhouse.jpg') center no-repeat;
          background-size: contain;
        }
      `}
      </style>
    </div>
  );
};

export default Home;
