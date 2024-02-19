import React from "react";

export default function Login({ setshow }) {
  return (
    <div className="w-[25%]">
      <div className="bg-slate-400 rounded-t-lg py-8"></div>
      <div className="bg-black bg-opacity-25 flex flex-col gap-2 p-2 rounded-b-lg">
        <input type="text" placeholder="username" className="py-1 rounded-sm" />
        <input type="text" placeholder="password" className="py-1 rounded-sm" />
        <div className="flex justify-center items-center">
          <input type="checkbox" />
          Remember me?
        </div>
        <button className="text-2xl bg-slate-400 rounded-lg py-1 hover:bg-slate-500">
          Login
        </button>
        <button className="underline" onClick={() => setshow(true)}>
          i don't have an account
        </button>
      </div>
    </div>
  );
}
