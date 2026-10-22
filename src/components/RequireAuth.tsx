import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

function RequireAuth() {
  const { isSignedIn } = useAuth();
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to="/signin" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

export default RequireAuth;