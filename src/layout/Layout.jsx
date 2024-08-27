import Footer from "@/components/footer/footer";
import Hader from "@/components/header/header";
import React from "react";
import { Outlet } from "react-router-dom";

const mainLayout = () => {
  return (
    <>
      <Hader />
      <main className="container mx-auto px-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default mainLayout;
