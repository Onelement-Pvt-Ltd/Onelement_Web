# Client source architecture

The client uses a feature-first structure. Code that belongs to one product
area stays inside that feature; code used across features lives in shared.

## Directory map

    src/
    |-- app/                 Application shell, routes, Redux store
    |-- assets/              Static assets grouped by feature or shared use
    |-- features/
    |   |-- about/
    |   |   |-- components/  Landing, overview, and vision/mission sections
    |   |   |-- data/        About-page content models
    |   |   -- ui/          Page composition and styles
    |   |-- blog/            Preserved article feature for its future launch
    |   |   |-- api/         HTTP functions and React Query hooks
    |   |   |-- hooks/       Blog-specific React hooks
    |   |   |-- model/       Redux slice and selectors
    |   |   -- ui/          Article pages and local components
    |   |-- home/
    |   |   |-- components/  Components grouped by page section
    |   |   |-- data/        Home-page content models
    |   |   -- ui/          Page composition and styles
    |   |-- team/            Team page UI
    |   -- technology/
    |       |-- api/         HTTP functions and React Query hooks
    |       |-- data/        Technology content and image mapping
    |       -- ui/          Listing page and detail-page components
    |-- shared/
    |   |-- components/      Reusable UI primitives and scroll controls
    |   |-- config/          Shared runtime configuration
    |   |-- layout/          App layout, navbar, and footer
    |   |-- seo/             Metadata and structured-data helpers
    |   -- utils/           Framework-independent utilities
    |-- styles/              Global and application-wide styles
    -- main.jsx             Browser entry point and global providers

## Import rules

- Use the `@/` alias for imports that cross a feature boundary.
- Use relative imports only inside the same small component folder.
- Feature-specific code must stay inside its feature.
- Move code to shared only after it is used by more than one feature.

## Global typography

The whole client inherits --site-font-family from styles/global.css.
Changing that one variable updates pages, components, buttons, and form
controls consistently.
