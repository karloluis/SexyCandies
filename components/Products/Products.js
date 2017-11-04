import React from 'react';

import TitleBlock from '../TitleBlock/TitleBlock';

import H1 from '../Typography/H1';
import H2 from '../Typography/H2';
import H3 from '../Typography/H3';
import H4 from '../Typography/H4';
import H5 from '../Typography/H5';
import H6 from '../Typography/H6';
import P from '../Typography/Paragraph';

import Navigation from '../Navigation/NavigationBar';

import { COLORS, TEXTSIZE, TYPEOGRAPHY } from '../../lib/styles';

const Products = () => {
  return (
    <div>
      <TitleBlock>
        <H3 style={{ 'font-family': TYPEOGRAPHY.header.subtitle }}>Productos</H3>
      </TitleBlock>

      <div id="productsContent">
        <img src="/static/images/paintcake.jpg" height="600px" alt="" />

        <div className="segment">

          <ul>
            <TitleBlock single img="033-food.svg">
              <H6 style={{ color: COLORS.texts.secundary }} >General</H6>
            </TitleBlock>

            <li>Bizcochos</li>
            <li>Besitos de Coco</li>
            <li>Tres Leches</li>
            <li>Confecciones en Chocolate</li>
            <li>Frutas cubiertas a su gusto</li>
            <li>Flanes</li>
            <li>Galletas</li>
            <li>Barra de dulces y frutas</li>

            <TitleBlock img="032-food-1.svg">
              <H6 style={{ color: COLORS.texts.secundary }} >Otoño</H6>
            </TitleBlock>

            <li>Sabores de calabaza</li>
            <li>Productos de nueces pecanas (pecans)</li>

            <TitleBlock img="019-food-13.svg">
              <H6 style={{ color: COLORS.texts.secundary }} >Navidad</H6>
            </TitleBlock>

            <li>Coquito de sabores</li>
            <li>Arroz con dulce</li>
            <li>Tembleque</li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`

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
