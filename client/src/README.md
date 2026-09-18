# Client source architecture

The client uses a feature-first structure. Code that belongs to one product
area stays inside that feature; code used across features lives in shared.

## Directory map

    src/
    |-- app/                 Application shell, routes, Redux store
    |-- assets/              Images and other static source assets
    |-- features/
    |   |-- about/           About page UI and local data
    |   |-- blog/
    |   |   |-- api/         HTTP functions and React Query hooks
    |   |   |-- hooks/       Blog-specific React hooks
    |   |   |-- model/       Redux slice and selectors
    |   |   -- ui/          Blog pages and components
    |   |-- home/            Home page UI and home-only data
    |   |-- team/            Team page UI
    |   -- technology/
    |       |-- api/         HTTP functions and React Query hooks
    |       |-- model/       Technology state
    |       -- ui/          Technology pages and components
    |-- shared/
    |   |-- components/      Reusable UI primitives and scroll controls
    |   |-- layout/          App layout, navbar, and footer
    |   |-- lib/             Library integration helpers
    |   -- utils/           Framework-independent utilities
    |-- styles/              Global and application-wide styles
    |-- _legacy/             Unreferenced code kept temporarily for recovery
    -- main.jsx             Browser entry point and global providers

## Import rules

- Use the @/ alias for imports that cross a feature boundary.
- Use relative imports only inside the same small component folder.
- Feature-specific code must stay inside its feature.
- Move code to shared only after it is used by more than one feature.
- Do not import from _legacy; delete an archived file after confirming it is
  no longer needed.

## Global typography

The whole client inherits --site-font-family from styles/global.css.
Changing that one variable updates pages, components, buttons, and form
controls consistently.
