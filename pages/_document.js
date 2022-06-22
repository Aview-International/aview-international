import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
