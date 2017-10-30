import React from 'react';


import H1 from '../components/Typography/H1';
import H2 from '../components/Typography/H2';
import H3 from '../components/Typography/H3';
import H5 from '../components/Typography/H5';
import P from '../components/Typography/Paragraph';

import Navigation from '../components/Navigation/NavigationBar';

import {COLORS, TYPEOGRAPHY} from '../lib/styles';

const About = () => {
  return (
    <div>
      <Navigation />
      <div id="aboutBlock" >
        <H3 style={{ 'font-family': TYPEOGRAPHY.header.subtitle }}>Sobre Nosotros</H3>

        <P>
          Sexy Candies nació en Febrero del 2004 para satisfacer la necesidad
          dulzona entre compañeros de trabajo y para obtener un ingreso adicional.
          (Nombre) comenzó con lo más básico, malvaviscos cubiertos con chocolate
          y luego vino la moda de las fresas con chocolate.
          Posterior a ello, (Nombre) creó sus propias combinaciones de chocolate
          con frutas y nueces y las combinaciones que desearan los clientes.
        </P>

        <P>
          Lo "Sexy" viene de las decoraciones en los chocolates, no es lo mismo
          una fresa cubierta con chocolate que una fresa con chocolate a lo Sexy
          Candies, siempre decoradas con grajeas y brillo comestible, causando
          sensación tanto a la vista como al paladar. Cuando pequeña, (Nombre)
          tomó un curso de repostería básica todos los miércoles durante seis
          meses y desde ese momento fue una de sus grandes pasiones. Aunque no
          se dedicó a ello por un tiempo, cuando había un momento realmente
          especial, se ofrecía con pasión y esmero a crear algo dulcemente
          delicioso y mágicamente bello.
        </P>

        <H5>Creadores</H5>

        <P>
          (Nombre) adquirió formalmente un grado técnico en Panadería y
          Repostería internacional a la edad de 47 años en Enero de 2016,
          del Instituto de Banca y Comercio de Puerto Rico con Altos Honores.
          Ha ganando varias competencias entre sus pares, tales como la
          Tarjeta de Navidad la cual elaboró en chocolate, la casita de jengibre
          y la competencia de coquito navideño, elaborando uno de chocolate que
          sirvió en vasos de chocolate. Siendo la cocina otra de sus pasiones,
          (Nombre) comenzó un Grado Asociado en Artes Culinarias en la
          Universidad del Este.
        </P>
      </div>

      <style jsx>{`
        #aboutBlock {
          display: flex;
          flex-flow: column nowrap;
          align-content: center;
          justify-content: center;

          width: 85vw;
          margin: 200px auto 0 auto;
        }
      `}
      </style>
    </div>
  );
}

export default About;
