import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Ideas from "../pages/Ideas";
import AddIdea from "../pages/AddIdea";
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
        element: <AddIdea />,
      },
      {
        path: "/ideas/:id",
        element: <IdeaDetails />,
      },
      {
        path: "/my-ideas",
        element: <MyIdeas />,
      },
      {
        path: "/my-interactions",
        element: <MyInteractions />,
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