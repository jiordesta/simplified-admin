import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

export default function Authentication() {
  const [show, setshow] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {show ? <Register setshow={setshow} /> : <Login setshow={setshow} />}
    </div>
  );
}
