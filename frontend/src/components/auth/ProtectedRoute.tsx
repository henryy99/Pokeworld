import { useAuthStore } from "@/stores/useAuthStore";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { accessToken, user, loading, refresh, fetchMe } = useAuthStore();
  const [starting, setStarting] = React.useState(true);
  const init = async () => {
    if (!accessToken) {
      await refresh();
    }
    if (accessToken && !user) {
      await fetchMe();
    }
    setStarting(false);
  };
  React.useEffect(() => {
    init();
  }, []);
  if (loading || starting) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }
  if (!accessToken) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet></Outlet>;
};

export default ProtectedRoute;
