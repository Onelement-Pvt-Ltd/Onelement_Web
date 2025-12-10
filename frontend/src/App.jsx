import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Partials/Layout';
import Home from './components/PageComponents/Home/Home';

function App() {
  // const [count, setCount] = useState(0)
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Public Routes */}
      <Route index element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/about" element={<About />} /> */}

      {/* Protected Routes - no automatic redirection */}
      {/* <Route element={<ProtectedRoute />}> */}
        {/* <Route path="/event/upload" element={<EventFormWrapper />} /> */}
        {/* <Route path="/event/:eventId" element={<EventViewCard />} /> */}
      {/* </Route> */}
    </Route>
  )
);

  return (
    <>

        {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      {/* <AuthProvider> */}
        <RouterProvider router={appRouter} />
      {/* </AuthProvider> */}
    {/* </LocalizationProvider> */}

    </>
  )
}

export default App
