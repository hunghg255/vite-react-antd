import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import routes from '~pages';

function App() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
