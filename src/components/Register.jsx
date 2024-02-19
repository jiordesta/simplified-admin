import React from "react";

export default function Register({ setshow }) {
  return (
    <div className="w-[25%]">
      <div className="bg-slate-400 rounded-t-lg py-8"></div>
      <div className="bg-black bg-opacity-25 flex flex-col gap-2 p-2 rounded-b-lg">
        <input
          type="text"
          placeholder="first name"
          className="py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="last name"
          className="py-1 rounded-sm"
        />
        <input type="text" placeholder="username" className="py-1 rounded-sm" />
        <input
          type="password"
          placeholder="password"
          className="py-1 rounded-sm"
        />
        <input type="file" className="py-1 rounded-sm" />
        <ul>
          <li className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            client
          </li>
        </ul>
        <button className="text-2xl bg-slate-400 rounded-lg py-1 hover:bg-slate-500">
          Register
        </button>
        <button className="underline" onClick={() => setshow(false)}>
          already have an account
        </button>
      </div>
    </div>
  );
}
