import Layout from '../../components/Layout';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Error from '../../pages/Error';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
