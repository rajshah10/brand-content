import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, type, expectedType }) {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated || type !== expectedType) {
    return <Navigate to="/join" />;
  }

  return children;
}

export default ProtectedRoute;
