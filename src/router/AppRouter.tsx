import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage } from '../pages';
import { ROUTES } from './routes';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter; 