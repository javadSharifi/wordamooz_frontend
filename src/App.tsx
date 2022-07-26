import React, { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { authContext } from 'context/AuthContext';
import Category from 'pages/Category';
import Post from 'pages/Post';

const Auth = React.lazy(() => import('pages/auth'));
const Login = React.lazy(() => import('pages/auth/Login'));
const Register = React.lazy(() => import('pages/auth/Register'));
const AppLayouts = React.lazy(() => import('layouts/AppLayouts'));

function App() {
  const [auth] = useContext(authContext);

  const routes = useRoutes([
    {
      path: '/auth',
      element: auth.loading ? <Navigate to="/" /> : <Auth />,
      children: [
       
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: '/',
      element: auth.loading ? <AppLayouts /> : <Navigate to="/auth/login" />,
      children: [
        { path: '/', index: true, element: <Category /> },
        { path: '/categories/:idCategory', element: <Post /> },
      ],
    },
  ]);

  return routes;
}

export default App;
