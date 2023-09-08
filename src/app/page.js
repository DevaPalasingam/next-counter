"use client";

import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="absolute flex" style={{ top: "50%", left: "50%" }}>
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="mx-4" style={{ paddingTop: "8%" }}>
          {count}
        </span>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Home;
