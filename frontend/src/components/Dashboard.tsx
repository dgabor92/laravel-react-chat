import Navbar from "./Navbar";
import { useGetUserQuery } from "../lib/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface DashboardProps {
  children: React.ReactNode;
}

function Dashboard({ children }: DashboardProps) {
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useGetUserQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="min-h-full">
      <Navbar user={user} />
      <header className="bg-white shadow"></header>
      <main>
        <div className="mx-auto  max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
