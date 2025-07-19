import { useEffect } from "react";
import "./App.css";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { MainRoutes } from "routes";
import Layout from "components/layout/Layout";

function App() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH") {
      const html = document.querySelector("html");
      html.style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      html.style.scrollBehavior = "";
    }
  }, [location, navigationType]);

  return (
    <main>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>{MainRoutes}</Route>
      </Routes>
    </main>
  );
}

export default App;
