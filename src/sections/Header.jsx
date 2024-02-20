import React from "react";

export default function Header() {
  return (
    <ul className="flex flex-col gap-1">
      <li className="bg-black bg-opacity-75 p-4 rounded-lg cursor-pointer">
        <img src="/svg/items.svg" width={50} height={50} alt="" />
      </li>
      <li className="bg-black bg-opacity-75 p-4 rounded-lg cursor-pointer">
        <img src="/svg/order.svg" width={50} height={50} alt="" />
      </li>
    </ul>
  );
}
