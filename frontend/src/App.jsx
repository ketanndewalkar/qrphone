import React from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contactpage from "./pages/Contactpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
      path: "",
      element:<Home/>
    },{
      path:"contact-page",
      element:<Contactpage/>
    }],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
