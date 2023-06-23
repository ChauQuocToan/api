import './shop/assets/css/bootstrap.css'
import './shop/assets/css/style.css'
import './shop/assets/css/megamenu.css'
import './shop/assets/font-awesome/css/font-awesome.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './shop';
import Admin from './admin';
import Contact from './shop/components/features/Contact';
import AboutUs from './shop/components/features/AboutUS'
import Prodcuts from './shop/components/products';
import Home from './shop/screens/Home';
import ProductDetailScreen from './shop/screens/ProductDetailScreen';
import Dashboard from './admin/components/Dashboard';
// import Product from './shop/components/products/Product';
import ProductList from './admin/components/Product/ProductList';
import ProductAdd from './admin/components/Product/ProductAdd';
import ProductEdit from './admin/components/Product/ProductEdit';
import ProductTrash from './admin/components/Product/ProductTrash';
import Product from './admin/components/Product';
import ProductEye from './admin/components/Product/ProductEye';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/products/:slug',
        element: <ProductDetailScreen />
      },
      {
        path: '/products',
        element: <Prodcuts />
      }, {
        path: '/product',
        element: <Home />
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/admin/product',
        element: <Product />,
        children: [
          {
            index: true,
            element: <ProductList />
          },
          {
            path: '/admin/product/list/:page',
            element: <ProductList />
          },
          {
            path: '/admin/product/add',
            element: <ProductAdd />
          },
          {
            path: '/admin/product/edit/:id',
            element: <ProductEdit />
          },
          {
            path: '/admin/product/show/:id',
            element: <ProductEye />
          },
          {
            path: '/admin/product/trash/:page?',
            element: <ProductTrash />
          },
        ]
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
