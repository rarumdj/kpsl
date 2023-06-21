import { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainRoutes } from 'routes';
import Layout from 'components/layout/Layout';

function App() {
  const location = useLocation();
 
  useEffect(
    () => {
      const html = document.querySelector("html");
      html.style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      html.style.scrollBehavior = "";
    },
    [location]
  );

  return (
    <main>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>{MainRoutes}</Route>
      </Routes>
      
    </main>
  );
}

export default App;
