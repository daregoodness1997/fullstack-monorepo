import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UIProvider } from '@dareheight/ui';
import { Page404, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Page404 />,
  },
  {
    path: '/',
    element: <Home />,
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
