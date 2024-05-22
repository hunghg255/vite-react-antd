import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { router } from './routes/routes';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position='top-center' />
    </>
  );
}

export default App;
