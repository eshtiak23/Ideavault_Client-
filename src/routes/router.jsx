import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home";
import Ideas from "../pages/Ideas";
import AddIdea from "../pages/AddIdea";
import PrivateRoute from "../components/PrivateRoute";
import IdeaDetails from "../pages/IdeaDetails";
import MyIdeas from "../pages/MyIdeas";
import MyInteractions from "../pages/MyInteractions";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ideas",
        element: <Ideas />,
      },
    {
  path: "/add-idea",
  element: (
    <PrivateRoute>
      <AddIdea />
    </PrivateRoute>
  ),
},
      {
        path: "/ideas/:id",
        element: <IdeaDetails />,
      },
     {
  path: "/my-ideas",
  element: (
    <PrivateRoute>
      <MyIdeas />
    </PrivateRoute>
  ),
},
      {
        path: "/my-interactions",
        element: (
          <PrivateRoute>
            <MyInteractions />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;