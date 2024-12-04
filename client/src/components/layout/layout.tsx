import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
    </div>
  );
};

export default Layout;
