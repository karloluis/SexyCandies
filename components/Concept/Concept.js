import React from 'react';

import TitleBlock from '../TitleBlock/TitleBlock';

import H5 from '../Typography/H5';
import H6 from '../Typography/H6';
import P from '../Typography/Paragraph';

import { COLORS, SPACING } from '../../lib/styles';

const Concept = () => {
  return (
    <div id="conceptBlock" >
      <div id="conceptContent">
        <div className="conceptImage" >
          {/* <img src="/static/images/cake-0.jpeg"/> */}
        </div>

        <div className="conceptSegment" >
          <TitleBlock img="014-food-18.svg" >
            <H6
              style={{ color: COLORS.texts.secundary }}
              >
                Dulces, repostería, postres y confecciones
              </H6>
          </TitleBlock>

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
      </div>

      <style jsx>{`
          #conceptBlock {
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
            justify-content: flex-start;

            width: 85vw;

            margin: ${SPACING.lg} auto;
          }

          #conceptContent {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            text-size-adjust: 100%;
          }

          .conceptSegment {
            width: 55%;
          }

          .conceptImage {
            width: 40%;
            background: url('/static/images/cake-1.jpeg') center no-repeat;
            background-size: contain;
          }

      `}</style>
    </div>
  );
}

export default Concept;
