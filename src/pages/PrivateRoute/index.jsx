import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = sessionStorage.getItem("user");

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
