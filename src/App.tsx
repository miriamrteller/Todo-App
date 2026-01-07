import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useInitTodos } from './store/useInitData';


function App() {
  useInitTodos()
  return <RouterProvider router={router} />;
}

export default App;
