import "@/styles/app.css";
import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Layout from "@/shared/layout/Layout";
import TechnologyLayout from "@/features/technology/ui/TechnologyLayout";
import NotFound from "@/shared/components/NotFound";
import RouteError from "@/shared/components/RouteError";

const Home = lazy(() => import("@/features/home/ui/Home"));
const About = lazy(() => import("@/features/about/ui/About"));
const Team = lazy(() => import("@/features/team/ui/WhoWeAre"));
const VisionMissionSection = lazy(() =>
  import("@/features/about/components/vision-mission/VisionMissionSection")
);

const Technology = lazy(() =>
  import("@/features/technology/ui/Technology")
);
const TechnologyDetails = lazy(() =>
  import("@/features/technology/ui/details/TechnologyDetails")
);

const ArticlesComingSoon = lazy(() =>
  import("@/features/blog/ui/ArticlesComingSoon")
);
const AdminViews = lazy(() => import("@/features/admin/ui/AdminViews"));

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
    errorElement: <RouteError />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "about", element: withSuspense(About) },
      { path: "about/teams", element: withSuspense(Team) },
      { path: "about/vision-mission", element: withSuspense(VisionMissionSection) },
      { path: "about/VM", element: <Navigate to="/about/vision-mission" replace /> },

      { path: "technologies", element: withSuspense(Technology) },
      {
        path: "technologies/details/:techId",
        element: <TechnologyLayout />,
        children: [{ index: true, element: withSuspense(TechnologyDetails) }]
      },
      { path: "technologies/details/*", element: <NotFound variant="technology" /> },

      { path: "articles", element: withSuspense(ArticlesComingSoon) },
      { path: "articles/*", element: <Navigate to="/articles" replace /> },
      { path: "blogs", element: <Navigate to="/articles" replace /> },
      { path: "blogs/*", element: <Navigate to="/articles" replace /> },
      { path: "*", element: <NotFound /> }
    ]
  },
  { path: "/admin/views", element: withSuspense(AdminViews), errorElement: <RouteError /> }
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
