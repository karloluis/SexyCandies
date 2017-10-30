import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Modal from 'react-modal';

import H5 from '../Typography/H5';

import {COLORS, TEXTSIZE, SPACING, TYPEOGRAPHY} from '../../lib/styles';

class NavigationBar extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      modal: false,
    };

    this.manageOrderModal = this.manageOrderModal.bind(this);
  }

  manageOrderModal() {
    const modal = !this.state.modal;
    this.setState({ modal });
  }

  render() {
    const modalStyle = {
      content: {
        backgroundColor: COLORS.texts.terciary,
        border: `1px solid ${COLORS.texts.secundary}`,
        top: '24vh',
        bottom: '24vh',
        left: '24vw',
        right: '24vw',
        // height: '40vh',
        // width: '50vw',
      },
    };

    return (
      <nav id="navbar">
        <Link href="/">
          <H5 id="navLogo"
            style={{
              display: 'inline-block',
              marginRight: 'auto',
              textAlign: 'center',
              color: COLORS.texts.secundary
            }}
          >
            Sexy Candies
          </H5>
        </Link>

        <Link href="/#concept">
          <a className="navLink">Concepto</a>
        </Link>

        <Link href="/products">
          <a className="navLink">Productos</a>
        </Link>

        <Link href="/about">
          <a className="navLink">Conócenos</a>
        </Link>

        <span id="orderAction" className="navLink" onClick={this.manageOrderModal} >¡Ordenar!</span>

        <Modal style={modalStyle}
          isOpen={this.state.modal}
          onRequestClose={this.manageOrderModal}
        >
          <H5>Ordena ahora</H5>
        </Modal>

        <style jsx>
          {`
            #navbar {
              position: fixed;
              top: 0;
              width: calc(100% - 2*${SPACING.xl});
              padding: ${SPACING.xl} ${SPACING.xl};
              background-color: ${COLORS.shaders.lightly};
              font-size: ${TEXTSIZE.nav};
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;
            }

            .navLink {
              font-family:${TYPEOGRAPHY.input};
              display: inline-block;
              padding:${SPACING.sm} ${SPACING.lg} ${SPACING.sm} ${SPACING.md};

              text-align: center;
              text-decoration: none;
              color: ${COLORS.texts.terciary};
            }

            .navLink:hover {
              background-color: ${COLORS.shaders.dark};
              font-style: italic;
            }

            #orderAction {
              color: ${COLORS.texts.secundary};
            }

            #orderAction:hover {
              text-shadow: black -1px 2px;
            }
         `}
        </style>
      </nav>
    );
  }
}

export default NavigationBar;
