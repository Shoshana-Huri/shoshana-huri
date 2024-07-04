import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import About from "../new-components/About";
import Projects from "../new-components/Projects";
import Home from "../new-components/Home";
import Expertise from "../new-components/Expertise";

const router = createBrowserRouter([
  {
    path: "/shoshana-huri",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "expertise", element: <Expertise /> },
      { path: "projects", element: <Projects /> },
      { index: true, element: <Home /> },
    ],
  },
]);

export default router;
