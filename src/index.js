import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/tailwind.css';
import './assets/style/index.css';
import './assets/style/font.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

