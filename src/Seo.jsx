import { Helmet } from 'react-helmet';

const SITE_URL = 'https://www.jonathanluembe.dev';
const SITE_TITLE = 'Jonathan Luembe | Développeur React & Next.js';
const SITE_DESCRIPTION =
  'Développeur React et Next.js, TypeScript et Full-Stack JavaScript basé en Île-de-France. Applications web modernes en production.';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jonathan Luembe',
  url: SITE_URL,
  jobTitle: 'Développeur React / Next.js & Full-Stack JavaScript',
  sameAs: [
    'https://github.com/JoeLeDev',
    'https://www.linkedin.com/in/jonathanluembe/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
};

const HeadSEO = () => (
  <Helmet>
    <html lang="fr" />
    <title>{SITE_TITLE}</title>
    <meta name="description" content={SITE_DESCRIPTION} />
    <link rel="canonical" href={SITE_URL} />

    <meta property="og:title" content={SITE_TITLE} />
    <meta property="og:description" content={SITE_DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:image" content={`${SITE_URL}/uploads/joelabs-og-banner.png`} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@jonathanluembe" />
    <meta name="twitter:title" content={SITE_TITLE} />
    <meta name="twitter:description" content={SITE_DESCRIPTION} />
    <meta name="twitter:image" content={`${SITE_URL}/uploads/joelabs-og-banner.png`} />

    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>
);

export default HeadSEO;
