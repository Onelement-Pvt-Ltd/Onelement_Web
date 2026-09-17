import "./App.css";
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Partials/Layout";
import TechnologyLayout from "./components/PageComponents/Technology/TechnologyLayout";
import BlogsLayout from "./components/PageComponents/Blogs/BlogsLayout";

const Home = lazy(() => import("./components/PageComponents/Home/Home"));
const About = lazy(() => import("./components/PageComponents/About/About"));
const Team = lazy(() => import("./components/PageComponents/Team/Team"));
const VissionMissionSection = lazy(() =>
  import("./components/PageComponents/About/VisionMissionComponents/VissionMissionSection")
);

const Technology = lazy(() =>
  import("./components/PageComponents/Technology/Technology")
);
const TechnologyDetails = lazy(() =>
  import("./components/PageComponents/Technology/TechnologyDetailsComponents/TechnologyDetails")
);

const Blog = lazy(() => import("./components/PageComponents/Blogs/Blog"));
const BlogDetails = lazy(() =>
  import("./components/PageComponents/Blogs/BlogDetails")
);

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-pulse text-[#0a2955] text-lg">Loading...</div>
  </div>
);

const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "about", element: withSuspense(About) },
      { path: "about/teams", element: withSuspense(Team) },
      { path: "about/VM", element: withSuspense(VissionMissionSection) },

      { path: "technologies", element: withSuspense(Technology) },
      {
        path: "technologies/details/:techId",
        element: <TechnologyLayout />,
        children: [{ index: true, element: withSuspense(TechnologyDetails) }]
      },

      { path: "blogs", element: withSuspense(Blog) },
      {
        path: "blogs/:slug",
        element: <BlogsLayout />,
        children: [{ index: true, element: withSuspense(BlogDetails) }]
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;