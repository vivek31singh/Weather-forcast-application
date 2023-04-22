import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

const handleLocationClick =()=>{
  if(navigator.geolocation){
    toast.info("fetching users location.")
    navigator.geolocation.getCurrentPosition((position)=>{
      toast.success("Location fetched!")
      let lat= position.coords.latitude;
      let lon= position.coords.longitude;

      setQuery({
        lat,
        lon,
      })
    })
  }
}

const handleUnitsChange=(e)=>{
  const selectedUnit = e.currentTarget.name;
  if(units!== selectedUnit)
  setUnits(selectedUnit);
};

  return (
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search for city..."
          className="text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase max-sm:w-36 h-8 ml-4"
        />
        <BsSearch
          size={25}
          className="text-white cursor-pointer transition ease-in-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <TiLocationOutline
          size={30}
          className="text-white cursor-pointer hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center max-sm:ml-10">
        <button
          name="metric"
          className="text-xl text-white font-light hover:scale-125 transition ease-out max-sm:-ml-8"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light hover:scale-125 transition ease-out"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
