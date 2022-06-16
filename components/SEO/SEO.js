import Head from 'next/head';

/**
 * SEO component for each page. Add this as a self-closing tag at the beginning of each page (see homepage)
 *
 * @prop title: Page title
 * @prop description: Page description
 * @prop url: URL of page
 * @prop index: Boolean for whether or not to index page (true or false)
 * @prop showSchema: Boolean for whether or not to show schema tag (true only on homepage)
 *
 */
const SEO = ({ title, description, url, index, showSchema }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${description}`} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content={`${index ? `index, follow` : `noindex`}`} />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta property="og:image" content="/images/og-image.png" />
      <meta property="og:description" content={`${description}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:image" content="/images/twitter-image.png" />
      <meta name="twitter:site" content="@" />
      <meta name="twitter:creator" content="@" />
      <link rel="canonical" href={`${url}`} />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/images/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/images/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/images/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/images/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <meta
        name="msapplication-TileImage"
        content="/images/ms-icon-144x144.png"
      />
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': '',
              name: '',
              alternateName: '',
              address: {
                '@type': 'PostalAddress',
                addressLocality: '',
                postalCode: '',
                streetAddress: '',
              },
              description: '',
              url: 'https://www.aviewint.com/',
              logo: '',
              sameAs: [
                'https://www.aviewint.com/',
                // social links
              ],
            }),
          }}
        />
      )}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script async src={`{google analytics tag here}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '{google analytics code}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};

export default SEO;
