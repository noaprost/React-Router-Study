import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// Root에서는 Navbar를 보여주고 아래에 Outlet이라는 창구를 만들어줌, 이 창구에 해당하는 컴포넌트를 보여줄 예정
export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
