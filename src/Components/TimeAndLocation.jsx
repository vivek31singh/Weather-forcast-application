import React from "react";
import { formatToLocalTime } from "../Services/WeatherService";

function TimeAndLocation({weather: {dt, timezone,name, country}}) {
  return (
    <div>
      <div className="flex items-center justify-center my-6 w-52 h-14  max-sm:">
        <p className="text-white text-xl font-extralight max-sm:text-lg ">
          {formatToLocalTime(dt,timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
