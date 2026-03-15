import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Partials/Layout";
import Home from "./components/PageComponents/Home/Home";
import About from "./components/PageComponents/About/About";
import Team from "./components/PageComponents/Team/Team";

import AllTechnologies from "./components/PageComponents/Technology/SectionComponents/AllTechnologies";
import TechnologyLayout from "./components/PageComponents/Technology/TechnologyLayout";
import TechnologyDetails from "./components/PageComponents/Technology/TechnologyDetailsComponents/TechnologyDetails";
import Technology from "./components/PageComponents/Technology/Technology";

import BlogsLayout from "./components/PageComponents/Blogs/BlogsLayout";
import Blog from "./components/PageComponents/Blogs/Blog";
import BlogDetails from "./components/PageComponents/Blogs/BlogDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "about",
        element: <About />
      },

      {
        path: "/teams",
        element: <Team />
      },

      /* ---------------- TECHNOLOGY ---------------- */

      {
        path: "technologies",
        element: <Technology />
      },

      {
        path: "technologies/details/:techId",
        element: <TechnologyLayout />,
        children: [
          {
            index: true,
            element: <TechnologyDetails />
          }
        ]
      },

      /* ---------------- BLOGS ---------------- */

      {
        path: "blogs",
        element: <Blog />
      },

      {
        path: "blogs/:slug",   // ✅ IMPORTANT FIX
        element: <BlogsLayout />,
        children: [
          {
            index: true,
            element: <BlogDetails />
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;