import React, { useState } from "react";
import Loader from "./Loader";

export default function Login({ setshow, login, loading }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="w-full md:w-1/2 lg:w-[25%]">
      <div className="bg-slate-400 rounded-t-lg py-8"></div>
      <div className="bg-black bg-opacity-25 flex flex-col gap-2 p-2 rounded-b-lg">
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
        <div className="flex justify-center items-center">
          <input type="checkbox" />
          Remember me?
        </div>
        <button
          className="text-2xl bg-slate-400 rounded-lg py-1 hover:bg-slate-500"
          onClick={() => login({ username, password })}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <img src="/svg/loader.svg" width={32} height={32} alt="" />
            </div>
          ) : (
            "Login"
          )}
        </button>
        <button
          className="underline"
          onClick={() => setshow(true)}
          disabled={loading}
        >
          i don't have an account
        </button>
      </div>
    </div>
  );
}
