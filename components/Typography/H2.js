import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, HEADER_TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H2 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.primary.light : COLORS.texts.primary.dark;
  return (
    <h2 style={style} >
      {children}
      <style jsx>
        {`
          h2 {
            font-family: ${HEADER_TYPEOGRAPHY};
            font-size: ${TEXTSIZE.xl};
            color: ${color}
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 400;
          }
        `}
      </style>
    </h2>
  );
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.boolean,
  style: PropTypes.object,
};

export default H2;
