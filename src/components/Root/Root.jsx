import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex gap-6 justify-center  container mx-auto bg-cyan-600">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
