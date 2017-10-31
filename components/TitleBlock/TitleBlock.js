import React from 'react';
import PropTypes from 'prop-types';

import { SPACING } from '../../lib/styles';

const TitleBlock = ({ children, img }) => (
  <div>
    <div className="titleBlock">
      <img
        src={`/static/images/icons/svg/${img}`}
        alt=""
      />
      {children}
      <img
        src={`/static/images/icons/svg/${img}`}
        alt=""
      />
    </div>

    <style jsx>
      {`
        .titleBlock {
          display: flex;
          felx-flow: row nowrap;
          align-items: center;
          justify-content: center;

        }

        .titleBlock img {
          width: 30px;
          height: 30px;

          padding: ${SPACING.sm};
        }
      `}
    </style>
  </div>
);

TitleBlock.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string,
};

TitleBlock.defaultProps = {
  img: '004-cupcake-decorated-with-hearts.svg',
};

export default TitleBlock;
