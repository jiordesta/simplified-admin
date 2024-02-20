import React, { useState } from "react";

export default function Register({ setshow, register, loading }) {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [image, setimage] = useState(null);
  const [role, setrole] = useState("");

  return (
    <div className="w-full md:w-1/2 lg:w-[25%]">
      <div className="bg-slate-400 rounded-t-lg py-8" />
      <div className="bg-black bg-opacity-25 flex flex-col gap-2 p-2 rounded-b-lg">
        <input
          type="text"
          placeholder="first name"
          className="py-1 rounded-sm focus:outline-none bg-black bg-opacity-50 placeholder:text-white"
          onChange={(e) => setfname(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          className="py-1 rounded-sm focus:outline-none bg-black bg-opacity-50 placeholder:text-white"
          onChange={(e) => setlname(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          className="py-1 rounded-sm focus:outline-none bg-black bg-opacity-50 placeholder:text-white"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="py-1 rounded-sm focus:outline-none bg-black bg-opacity-50 placeholder:text-white"
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          type="file"
          className="py-1 rounded-sm"
          onChange={(e) => setimage(e.target.files[0])}
        />
        <ul className="flex flex-col lg:flex-row items-start justify-around lg:items-center bg-black bg-opacity-50 py-2 text-white">
          <li className="flex justify-center items-center gap-2">
            <input type="checkbox" onChange={() => setrole("customer")} />
            customer
          </li>
          <li className="flex justify-center items-center gap-2">
            <input type="checkbox" onChange={() => setrole("rider")} />
            rider
          </li>
          <li className="flex justify-center items-center gap-2">
            <input type="checkbox" onChange={() => setrole("admin")} />
            admin
          </li>
        </ul>
        <button
          className="text-2xl bg-slate-400 rounded-lg py-1 hover:bg-slate-500"
          onClick={() =>
            register({ fname, lname, username, password, image, role })
          }
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <img src="/svg/loader.svg" width={32} height={32} alt="" />
            </div>
          ) : (
            "Register"
          )}
        </button>
        <button
          className="underline"
          onClick={() => setshow(false)}
          disabled={loading}
        >
          already have an account
        </button>
      </div>
    </div>
  );
}
