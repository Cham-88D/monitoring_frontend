import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/icon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}


export default CustomDocument;
