"use client";
import React from "react";
import Footer from "./common/Footer/Footer";
import Menubar from "./common/Menubar/Menubar";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      <main className="mob:mt-[62px]  laptop:mt-[90px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
