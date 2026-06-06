import { Helmet } from 'react-helmet-async';
import { About } from '../components/sections/About';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Pixora</title>
        <meta name="description" content="Pixora is a creative design agency focused on strong visual identities and memorable brand experiences." />
        <meta property="og:title" content="About — Pixora" />
        <meta property="og:description" content="Strategy-led, design-obsessed. Meet Pixora." />
        <meta property="og:url" content="/about" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="pt-24">
        <About />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
}

export default AboutPage;
