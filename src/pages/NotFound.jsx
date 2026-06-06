import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found — Pixora</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Helmet>

      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-gradient">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
