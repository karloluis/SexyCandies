import React from 'react';

import H1 from '../components/Typography/H1';
import H2 from '../components/Typography/H2';
import H3 from '../components/Typography/H3';
import H5 from '../components/Typography/H5';
import H6 from '../components/Typography/H6';
import P from '../components/Typography/Paragraph';

import Navigation from '../components/Navigation/NavigationBar';

import { COLORS, TEXTSIZE, TYPEOGRAPHY } from '../lib/styles';

const Products = () => {
  return (
    <div>
      <Navigation />
      <div id="productsBlock">
        <img src="/static/images/paintcake.jpg" width="300px" />
        <H3 style={{ 'font-family': TYPEOGRAPHY.header.subtitle }}>Productos</H3>

        <div className="segment">
          <H5>General</H5>
        </div>
        <div className="segment">
          <H5>Ocacionses</H5>
          <ul>
            <li>Bizcochos</li>
            <li>Besitos de Coco</li>
            <li>Tres Leches</li>
            <li>Confecciones en Chocolate</li>
            <li>Frutas cubiertas a su gusto</li>
            <li>Flanes</li>
            <li>Galletas</li>
          </ul>
        </div>

        <div className="segment">
          <H5>Por Temporadas</H5>

          <H6>Otoño</H6>
          <ul>
            <li>Sabores de calabaza</li>
            <li>Productos en nueces pecanas (pecans)</li>
          </ul>

          <H6>Navidades</H6>
          <ul>
            <li>Coquito de sabores</li>
            <li>Arroz con dulce</li>
            <li>Tembleque</li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          #productsBlock {
            display: flex;
            flex-flow: column nowrap;
            align-content: center;
            justify-content: center;

            width: 85vw;
            margin: 200px auto 0 auto;
          }

          li {
            font-family: ${TYPEOGRAPHY.contentcursive};
            font-size: ${TEXTSIZE.md};
          }
        `}
      </style>
    </div>
  );
};

export default Products;
