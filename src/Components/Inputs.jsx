import React from "react";
import { BsSearch } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search for city..."
          className="text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase"
        />
        <BsSearch
          size={25}
          className="text-white cursor-pointer transition ease-in-out hover:scale-125"
        />
        <TiLocationOutline
          size={30}
          className="text-white cursor-pointer hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">
        °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-light">
        °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
