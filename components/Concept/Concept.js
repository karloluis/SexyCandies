import React from 'react';

import H5 from '../Typography/H5';
import H6 from '../Typography/H6';
import P from '../Typography/Paragraph';

import { COLORS, SPACING } from '../../lib/styles';

const Concept = () => {
  return (
    <div id="conceptBlock" >
      <div className="conceptImage" >
        {/* <img src="/static/images/cake-0.jpeg"/> */}
      </div>

      <div className="conceptSegment" >
        <H5>Concepto</H5>
        <H6 style={{ color: COLORS.texts.secundary }}>Dulces, repostería, postres y confecciones</H6>
        <P>
          Pastelería y repostería fina de todo tipo,
          elaborados con productos de las más alta calidad.
          Todo pedido se trabaja de manera individual,
          con opciones según las necesidades del cliente;
          bajos en azúcar o sustitución, con leche de almendras,
          coco o soya para los diferentes gustos.
          No hay cena sin un buen postre, ni cumpleaños sin bizcocho,
          hagamos de ese momento uno sumamente especial.
        </P>
      </div>

      <style jsx>{`
          #conceptBlock {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-around;

            width: 85vw;
            height: 75vh;
            margin: ${SPACING.lg} auto;
          }

          .conceptSegment {
            width: 50%;
          }

          .conceptImage {
            width: 40%;
            height: 80%;
            background: url('/static/images/loader-reverse.svg') center no-repeat;
            background-size: contain;
          }

          // .conceptImage img {
          //
          //   width: 100%;
          // }

      `}</style>
    </div>
  );
}

export default Concept;
