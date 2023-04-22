import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Punjab",
    },
    {
      id: 4,
      title: "Berlin",
    },
    {
      id: 5,
      title: "Sydney",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 max-sm:justify-center h-fit">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium max-sm:text-xs ml-4 mr-4"
          onClick={() => {
            setQuery({ q: city.title });
          }}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
