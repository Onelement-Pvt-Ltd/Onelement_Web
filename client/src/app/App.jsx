import "@/styles/app.css";
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/shared/layout/Layout";
import TechnologyLayout from "@/features/technology/ui/TechnologyLayout";
import BlogsLayout from "@/features/blog/ui/BlogsLayout";

const Home = lazy(() => import("@/features/home/ui/Home"));
const About = lazy(() => import("@/features/about/ui/About"));
const Team = lazy(() => import("@/features/team/ui/Team"));
const VissionMissionSection = lazy(() =>
  import("@/features/about/ui/VisionMissionComponents/VissionMissionSection")
);

const Technology = lazy(() =>
  import("@/features/technology/ui/Technology")
);
const TechnologyDetails = lazy(() =>
  import("@/features/technology/ui/TechnologyDetailsComponents/TechnologyDetails")
);

const Blog = lazy(() => import("@/features/blog/ui/Blog"));
const BlogDetails = lazy(() =>
  import("@/features/blog/ui/BlogDetails")
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
