import { Helmet } from 'react-helmet-async';

import type { MetaProps } from './types';

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Starter kit for modern web applications',
};
function Meta({
  description = defaultMetaTags.description,
  meta = [],
  title,
  image = defaultMetaTags.image,
}: MetaProps) {
  const appTitle = 'ITOS';
  const pageTitle = `${appTitle}${title ? ' | ' + title : ''}`;

  return (
    <Helmet
      title={appTitle}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: pageTitle,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: pageTitle,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ].concat(meta)}
    />
  );
}

export default Meta;
