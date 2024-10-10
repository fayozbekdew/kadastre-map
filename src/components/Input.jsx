import React, { useState } from "react";
import { data } from "../../data/data";

function Input({ placeholder, type, label, img, width, height, setSearchEl }) {
  const [search, setSearch] = useState("");
  function filteredFn(kadastreNumber) {
    const filterObg = data.filter(obj => obj.cadastralNumber === kadastreNumber )
    setSearchEl(filterObg);
  }
  console.log(search);
  if (label != null) {
    return (
      <label className={` relative flex items-start flex-col gap-y-1`}>
        <h3> {label}</h3>
        {img != null && (
          <img
            src={img}
            width="40px"
            height="40px"
            alt="input img"
            className="absolute "
          />
        )}
        <input
          onChange={(e) => filteredFn(e.target.value)}
          className={`max-w-full w-[${width}] h-[${height}] border border-black`}
          type={type}
          placeholder={placeholder}
        />
      </label>
    );
  } else {
    return (
      <div className={` relative flex  flex-col gap-y-1`}>
        {img != null && (
          <img
            src={img}
            width="40px"
            height="40px"
            alt="input img"
            className="absolute left-0 "
          />
        )}
        <input
          onChange={(e) => filteredFn(e.target.value)}
          className={`max-w-full w-[${width}] h-[${height}]  rounded-md pl-3 text-[20px] outline-none border border-black backdrop-blur-sm bg-white/30`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Input;
