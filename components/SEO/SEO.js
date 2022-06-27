import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * SEO component for each page. Add this as a self-closing tag at the beginning of each page (see homepage)
 *
 * @prop title: Page title
 *
 */
const SEO = ({ title }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="Video Translation & Subtitling" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`www.aviewint.com${path}`} />
      <meta property="og:image" content="/images/og-image.png" />
      <meta
        property="og:description"
        content="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <link rel="canonical" href={`www.aviewint.com${path}`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon/favicon-16x16.png"
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-MNQ5EGQKS8`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MNQ5EGQKS8', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};

export default SEO;
