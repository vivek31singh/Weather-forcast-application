import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { BiDroplet } from "react-icons/bi";
import { BiWind } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbSunset2 } from "react-icons/tb";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or rain</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2 ">
          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <BiDroplet size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <BiWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <MdOutlineWbSunny />
        <p className="font-light">
          Rise: <span className="sfont-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light ">|</p>

        <TbSunset2 />
        <p className="font-light">
          Set: <span className="sfont-medium ml-1">07:35 PM</span>
        </p>
        <p className="font-light ">|</p>


        <AiOutlineArrowUp />
        <p className="font-light">
          High: <span className="sfont-medium ml-1">45°</span>
        </p>
        <p className="font-light ">|</p>


        <AiOutlineArrowDown />
        <p className="font-light">
          Low: <span className="sfont-medium ml-1">45°</span>
        </p>
        <p className="font-light ">|</p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
