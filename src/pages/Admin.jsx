import React from "react";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import Orders from "../sections/Orders";

export default function Admin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex h-[800px] w-[500px] gap-1">
        <Header />
        <Orders />
      </div>
    </div>
  );
}
