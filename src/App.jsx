import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { Footer, Navbar } from './components';
import { Detail, Gallery, Home, Login } from './pages';

import { AuthProvider } from './hooks/useAuth';

export default function App() {
  const { pathname } = useLocation();

  return (
    <AuthProvider>
      {pathname !== '/login' && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:type" element={<Gallery />} />
        <Route path="/:type/:id" element={<Detail />} />
        <Route path="/:type/search/:term" element={<Gallery />} />
        <Route path="/:type/:genre/:id" element={<Gallery />} />

        <Route path="/watchlist" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Toaster position="bottom-center" />

      {pathname !== '/login' && <Footer />}
    </AuthProvider>
  );
}
