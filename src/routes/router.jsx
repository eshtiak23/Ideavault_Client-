import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Ideas from "../pages/Ideas";
import IdeaDetails from "../pages/IdeaDetails";
import AddIdea from "../pages/AddIdea";
import EditIdea from "../pages/EditIdea";
import MyIdeas from "../pages/MyIdeas";
import MyInteractions from "../pages/MyInteractions";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

import PrivateRoute from "../components/PrivateRoute";

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
        path: "/ideas/:id",
        element: <IdeaDetails />,
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
        path: "/edit-idea/:id",
        element: ( <PrivateRoute>
            <EditIdea />
          </PrivateRoute>
        ),
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
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
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