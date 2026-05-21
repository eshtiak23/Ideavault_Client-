import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../provider/AuthProvider";
import Spinner from "./Spinner";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  // loading spinner Sec

 if (loading) return <Spinner />;

if (!user) {
  return <Navigate to="/login" state={location.pathname} replace />;
}

return children;

  // not logged in

  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
}
