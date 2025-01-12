import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionPage from './pages/SolutionPage';
import CommunityPage from './pages/CommunityPage';
import ContactUsPage from './pages/ContactUsPage';
import Layout from './components/Layout';  // Import the Layout

// Define your routes using createBrowserRouter
const routesConfig = [
  {
    path: "/",
    element: <Layout />,  // Layout wraps all pages
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'solution', element: <SolutionPage /> },
      { path: 'community', element: <CommunityPage /> },
      { path: 'contact', element: <ContactUsPage /> },
    ]
  }
];

// Create the router
const router = createBrowserRouter(
  
  createRoutesFromElements(
    routesConfig.map(({ path, element, children }) => (
      <Route key={path} path={path} element={element}>
        {children && children.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    ))
  )
);

const App = () => {
 
  return <RouterProvider router={router} />;
  // return <HomePage />;
};

export default App;
