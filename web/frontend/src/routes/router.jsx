import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';

import Home from '../pages/Home.jsx';
import Notaria from '../pages/Notaria.jsx';
import Servicios from '../pages/Servicios.jsx';
import Tarifas from '../pages/Tarifas.jsx';

import QrVerify from '../pages/QrVerify.jsx';
import NotFound from '../pages/NotFound.jsx';
import Contacto from '../pages/Contacto.jsx';

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'notaria', element: <Notaria /> },
      { path: 'servicios', element: <Servicios /> },
      { path: 'tarifas', element: <Tarifas /> },

      { path: 'contacto', element: <Contacto /> },
      { path: 'qr/verify', element: <QrVerify /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;