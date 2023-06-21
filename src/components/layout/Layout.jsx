import Footer from "components/footer";
import Navbar from "components/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="w-full">
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default Layout;
