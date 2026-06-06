import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components/site/Header';
import { Footer } from './components/site/Footer';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './components/site/ThemeProvider';

// Import page components
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import BookPage from './pages/Book';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
