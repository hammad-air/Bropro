import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { TrustedBy } from '../components/sections/TrustedBy';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { CaseStudies } from '../components/sections/CaseStudies';
import { About } from '../components/sections/About';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Pixora — Designs That Make Brands Impossible to Ignore</title>
        <meta name="description" content="Pixora is a creative design agency crafting brand identity, social media design, UI, and marketing creatives that drive growth." />
        <meta property="og:title" content="Pixora — Creative Design Agency" />
        <meta property="og:description" content="Transforming ideas into visual impact. Branding, social, UI and marketing design." />
        <meta property="og:url" content="/" />
        <link rel="canonical" href="/" />
      </Helmet>

      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio compact />
      <CaseStudies />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}

export default HomePage;
