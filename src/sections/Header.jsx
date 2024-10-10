import React from "react";
import { SearchImg, StoryImg } from "../assets";
import Input from "../components/Input";

function Header({ setSearchEl }) {
  return (
    <div className="w-[1300px] absolute z-10  mt-4 max-w-full mx-auto flex items-center justify-center gap-x-2">
      <Input
        placeholder="Search with kadastre number"
        type="text"
        width="1000px"
        height="50px"
        setSearchEl={setSearchEl}
      />
      <button className="bg-gray-200 text-white w-[50px] h-[50px] rounded-md flex items-center justify-center">
        <img src={StoryImg} alt="story img" width={35} height={35} />
      </button>
    </div>
  );
}

export default Header;
