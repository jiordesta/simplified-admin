import React, { useState } from "react";

export default function CreateNewProduct({
  setcreate,
  create_product,
  loading,
}) {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [desc, setdesc] = useState("");

  return (
    <div className="w-full h-full z-50">
      <div className="bg-black bg-opacity-50 p-2 rounded-t-lg flex justify-between items-center">
        <h1 className="text-center text-3xl font-semibold"></h1>
        <button
          className="text-4xl bg-black w-[50px] pb-2 bg-opacity-25 rounded-lg"
          onClick={() => {
            setcreate(false);
          }}
        >
          x
        </button>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="new product name"
            className="w-[75%] py-2 placeholder:text-white rounded-lg bg-black bg-opacity-25 placeholder:text-center focus:outline-none"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="number"
            placeholder="price"
            className="w-[25%] py-2 placeholder:text-white rounded-lg bg-black bg-opacity-25 placeholder:text-center focus:outline-none"
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <textarea
          cols="30"
          rows="10"
          className="bg-black bg-opacity-25 rounded-lg"
          onChange={(e) => setdesc(e.target.value)}
        />
        <button
          className="bg-black bg-opacity-50 py-1 rounded-lg"
          disabled={loading}
          onClick={() => create_product({ name, price, desc })}
        >
          {loading ? "loading" : "Add"}
        </button>
      </div>
    </div>
  );
}
