import { Helmet } from 'react-helmet-async';
import { Services } from '../components/sections/Services';
import { CTA } from '../components/sections/CTA';

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Pixora</title>
        <meta name="description" content="Brand identity, logo, social media, UI, marketing & presentation design services by Pixora." />
        <meta property="og:title" content="Services — Pixora" />
        <meta property="og:description" content="A full creative toolkit for ambitious brands." />
        <meta property="og:url" content="/services" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="pt-24">
        <Services />
        <CTA />
      </div>
    </>
  );
}

export default ServicesPage;
