import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

import { COLORS } from '../lib/styles';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks
    } = renderPage();
    const styles = flush();
    return {
      html, head, errorHtml, chunks, styles,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Great+Vibes|Marck+Script|Sacramento|Yellowtail" rel="stylesheet" />

          <link rel="stylesheet" href="/static/css/base.css" />
        </Head>
        <body id="body">
            {this.props.customValue}
            <Main />
            <NextScript />
        </body>
        <style jsx global>{`
          #body {
            margin: 0;
            background-color: #fff;
            font-size: 16px;
          }
       `}</style>
      </html>
    )
  }
}
