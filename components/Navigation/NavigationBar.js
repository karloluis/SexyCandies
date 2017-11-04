import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Modal from 'react-modal';

import TitleBlock from '../TitleBlock/TitleBlock';

import H5 from '../Typography/H5';
import P from '../Typography/Paragraph';

import { COLORS, TEXTSIZE, SPACING, TYPEOGRAPHY } from '../../lib/styles';

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
      overlay: {
        // background: `${COLORS.shaders.primary}`,
      },
      content: {
        backgroundColor: COLORS.shaders.lightly,
        border: `1px solid ${COLORS.texts.secundary}`,
        borderRadius: '85px',
        bottom: 'auto',
        minHeight: '10rem',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        width: '60%',
        maxWidth: '60rem',
      },
    };

    return (
      <nav id="navbar">
        <Link href="/">
          <a id="navLogo"
            style={{
              display: 'inline-block',
              marginRight: 'auto',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            <H5 style={{ color: COLORS.texts.secundary }}>
              Sexy Candies
            </H5>
          </a>

        </Link>

        <Link href="#products">
          <a className="navLink">Productos</a>
        </Link>

        <Link href="#about">
          <a className="navLink">Conócenos</a>
        </Link>

        <span id="orderAction" className="navLink" onClick={this.manageOrderModal} >¡Ordenar!</span>

        <Modal style={modalStyle}
          isOpen={this.state.modal}
          onRequestClose={this.manageOrderModal}
        >
          <div id="modalContent">
            <TitleBlock img="003-bell-with-heart-covering-dish.svg">
              <H5>Ordene ahora</H5>
            </TitleBlock>
            <P>
              Para ordenes y servicio llame al
            </P>

            <P style={{ fontFamily: TYPEOGRAPHY.header.title, textAlign: 'center', color: COLORS.texts.secundary  }} >(787) 473-1043</P>

            <P>
              Para facilitar el proceso, favor tener la siguiente información...
            </P>

            <div id="orderRequisites">
              <ul>
                <li>
                  Fecha de entrega
                </li>

                <li>
                  Cantidad
                </li>

                <li>
                  Motivo
                </li>

                <li>
                  Contacto
                </li>
              </ul>
            </div>
          </div>
        </Modal>

        <style jsx>
          {`
            #navbar {
              position: fixed;
              top: 0;
              width: calc(100% - 2*${SPACING.xl});
              padding: ${SPACING.md} ${SPACING.xl} ${SPACING.md} ${SPACING.xl};
              background-color: ${COLORS.shaders.lightly};
              font-size: ${TEXTSIZE.nav};
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: flex-start;

              border: 0;
              border-radius: 0 0 14px 14px;
            }

            .navLink {
              font-family:${TYPEOGRAPHY.content};
              display: inline-block;
              margin-top: ${SPACING.lg};
              padding:${SPACING.sm} ${SPACING.mg} ${SPACING.sm} ${SPACING.md};
              text-align: center;
              text-decoration: none;

              font-size: 1.8rem;
              color: ${COLORS.texts.contrast};
            }

            .navLink:hover {
              background-color: ${COLORS.shaders.dark};
              text-shadow: black -1px 1px;
              font-style: italic;
              border: 0;
              border-radius: 16px;
            }

            #orderAction {
              color: ${COLORS.texts.secundary};
            }

            #orderAction:hover {
              text-shadow: black -1px 2px;
            }

            #orderRequisites {
              margin: ${SPACING.xs} ${SPACING.sm};
              text-align: center;
            }

            li {
              font-family: ${TYPEOGRAPHY.contentcursive};
              font-size: ${TEXTSIZE.md};
              color: ${COLORS.texts.contrast};
            }
         `}
        </style>
      </nav>
    );
  }
}

export default NavigationBar;
