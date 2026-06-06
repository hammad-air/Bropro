import { Helmet } from 'react-helmet-async';
import { Portfolio } from '../components/sections/Portfolio';
import { CaseStudies } from '../components/sections/CaseStudies';
import { CTA } from '../components/sections/CTA';

function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio — Pixora</title>
        <meta name="description" content="Selected branding, UI, social media and marketing projects by Pixora." />
        <meta property="og:title" content="Portfolio — Pixora" />
        <meta property="og:description" content="Explore our work across branding, UI and campaigns." />
        <meta property="og:url" content="/portfolio" />
        <link rel="canonical" href="/portfolio" />
      </Helmet>

      <div className="pt-24">
        <Portfolio />
        <CaseStudies />
        <CTA />
      </div>
    </>
  );
}

export default PortfolioPage;
