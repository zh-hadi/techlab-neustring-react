import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate
} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import HomePage from './pages/HomePage';
import {GlobeDemo } from './pages/GlobeDemo';
import GlobeReact from './pages/GlobeReact';
import AboutPage from './pages/AboutPage';
import SolutionPage from './pages/SolutionPage';
import CommunityPage from './pages/CommunityPage';
import ContactUsPage from './pages/ContactUsPage';
import Layout from './components/Layout';
import { createContext, useState, useContext } from 'react';
import { PagesColorProvider } from './contexts/PagesColorContext'
import { SolutionPageProvider} from './contexts/SolutionPageContext'
import TestPage from './pages/TestPage';
import ScrollPageHandler from "./components/ScrollPageHandler";


const colorData = [];


export const ColorContext = createContext();



const routesConfig = [
  {
    path: "/",
    element: <Layout />, // Layout wraps all pages
    children: [
      { index: true, element: <Navigate to="home" replace /> }, // Redirect `/` to `/home`
      { path: 'home', element: <HomePage  /> },
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
        {children &&
          children.map(({ path, element, index }) => (
            <Route key={path || "index"} path={path} index={index} element={element} />
          ))}
      </Route>
    ))
  )
);

const App = () => {
  const [color, setColor] = useState(colorData); 



  return (
      <AnimatePresence mode="wait">



                <SolutionPageProvider>

                  <PagesColorProvider>
                      <ColorContext.Provider key="111" value={{ color, setColor }}>


                          <RouterProvider router={router}>
                        <ScrollPageHandler >
                        </ScrollPageHandler>
                            </RouterProvider>

                      </ColorContext.Provider>
                      
                  </PagesColorProvider>
                </SolutionPageProvider>
                

  
      </AnimatePresence>
  );
};

export default App;
