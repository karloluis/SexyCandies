import React from 'react';

import P from '../Typography/Paragraph';
import {COLORS, TYPEOGRAPHY, SPACING} from '../../lib/styles';

const Team = () => (
  <div style={{ width: '80vw', margin: '24px auto' }}>

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
);

export default Team;
