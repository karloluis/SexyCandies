import React from 'react';

import TitleBlock from '../components/TitleBlock/TitleBlock';

import H1 from '../components/Typography/H1';
import H2 from '../components/Typography/H2';
import H3 from '../components/Typography/H3';
import H4 from '../components/Typography/H4';
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

        <TitleBlock>
          <H3 style={{ 'font-family': TYPEOGRAPHY.header.subtitle }}>Productos</H3>
        </TitleBlock>

        <div id="productsContent">
          <img src="/static/images/paintcake.jpg" height="400px" alt="" />

          <div className="segment">

            <ul>
              <H5>General</H5>
              <li>Bizcochos</li>
              <li>Besitos de Coco</li>
              <li>Tres Leches</li>
              <li>Confecciones en Chocolate</li>
              <li>Frutas cubiertas a su gusto</li>
              <li>Flanes</li>
              <li>Galletas</li>
              <li>Barra de dulces y frutas</li>

              <H5>Otoño</H5>
              <li>Sabores de calabaza</li>
              <li>Productos de nueces pecanas (pecans)</li>

              <H5>Navidad</H5>
              <li>Coquito de sabores</li>
              <li>Arroz con dulce</li>
              <li>Tembleque</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>
        {`

          #productsBlock {
            margin-top: 200px;
          }

          #productsContent {
            display: flex;
            flex-flow: row nowrap;
            align-content: center;
            justify-content: space-around;

            width: 85vw;
            margin: 20px auto;
          }

          ul{
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;
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
