import { Provider } from 'jotai';
import { RouterProvider } from 'react-router-dom';
import { DebugAtoms } from './components/DebugAtoms/DebugAtoms';
import { router } from './routes/routes';

function App() {
  return (
    <Provider>
      <DebugAtoms />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
