import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { BiDroplet } from "react-icons/bi";
import { BiWind } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbSunset2 } from "react-icons/tb";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { formatToLocalTime, iconUrlFromCode } from "../Services/WeatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3 ">
        <img
          src={iconUrlFromCode(icon)}
          alt=""
          className="w-20 max-sm:ml-8"
        />
        <p className="text-5xl max-sm:text-xl -ml-32">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2 max-sm:-ml-6">
          <div className="flex font-light text-sm items-center justify-center max-sm:-ml-12">
            <CiTempHigh size={18} className="mr-1"/>
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center max-sm:-ml-12">
            <BiDroplet size={18} className="mr-1"/>
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center max-sm:-ml-12">
            <BiWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}Km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 max-sm:justify-start -ml-16">
        <MdOutlineWbSunny />
        <p className="font-light">
          Rise: <span className="font-medium ml-1 max-sm:text-xs">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light ">|</p>

        <TbSunset2 />
        <p className="font-light">
          Set: <span className="font-medium ml-1 max-sm:text-xs">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light ">|</p>

        <AiOutlineArrowUp />
        <p className="font-light">
          High: <span className="font-medium ml-1 max-sm:text-xs">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light ">|</p>

        <AiOutlineArrowDown />
        <p className="font-light">
          Low: <span className="font-medium ml-1 max-sm:text-xs">{`${temp_min.toFixed()}°`}</span>
        </p>
        
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
