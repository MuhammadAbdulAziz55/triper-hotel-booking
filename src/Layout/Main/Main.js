import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../../Components/TopHeader/TopHeader";
import NavBar from "../../Components/Navbar/NavBar";
import Rooms from "../../Pages/Rooms/Rooms";
import Home from "../../Pages/Home/Home";
import RoomInfo from "../../Components/RoomInfo/RoomInfo";

const Main = () => {
  return (
    <div>
      <TopHeader />
      <NavBar />

      <Outlet />
    </div>
  );
};

export default Main;
