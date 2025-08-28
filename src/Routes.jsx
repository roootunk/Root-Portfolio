import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageAnimatedDeveloperPortal from './pages/homepage-animated-developer-portal';
import PortfolioInteractiveProjectShowcase from './pages/portfolio-interactive-project-showcase';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageAnimatedDeveloperPortal />} />
        <Route path="/homepage-animated-developer-portal" element={<HomepageAnimatedDeveloperPortal />} />
        <Route path="/portfolio-interactive-project-showcase" element={<PortfolioInteractiveProjectShowcase />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
