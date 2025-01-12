import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomePage />} />
  ])
);

const App = () => {
  return <RouterProvider router={router} />; // Change "routes" to "router"
};

export default App;
