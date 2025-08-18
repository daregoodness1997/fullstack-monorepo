import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UIProvider } from '@dareheight/ui';
import { Page404, Home, Auth } from './pages';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Page404 />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/login',
    element: <Auth.Login />,
  },
  {
    path: '/auth/register',
    element: <Auth.Register />,
  },
]);

function App() {
  return (
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  );
}

export default App;
