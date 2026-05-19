import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../provider/AuthProvider";
import Spinner from "./Spinner";

export default function PrivateRoute({ children }) {

  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  // loading spinner
  if (loading) {
    return <Spinner />;
  }

  // if not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={location.pathname}
      />
    );
  }

  return children;
}