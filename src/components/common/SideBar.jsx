import React from "react";
import { BiAbacus } from "react-icons/bi";

function SideBar() {
  const Box = ({ text, Icon }) => {
    return (
      <div className="m-1 flex items-center text-gray-700  p-4 hover:bg-blue-100 hover:rounded-xl hover:text-blue-800 ">
        <Icon className="w-6 h-6 mr-2" />

        <span className="ml-4">{text}</span>
      </div>
    );
  };
  return (
    <div className="bg-white w-[20%] fixed left-0 top-0  m-3 rounded-lg shadow-xl p-3 ">
      <h1 className="text-2xl font-bold">ColabCube</h1>
      <Box text="hghgh" Icon={BiAbacus} />
      <Box text="hghgh" Icon={BiAbacus} />
      <Box text="hghgh" Icon={BiAbacus} />
      <Box text="hghgh" Icon={BiAbacus} />
      <Box text="hghgh" Icon={BiAbacus} />
      <Box text="hghgh" Icon={BiAbacus} />
      <hr />
      <Box text="hghgh" Icon={BiAbacus} />
      <Box text="hghgh" Icon={BiAbacus} />
      <Box text="hghgh" Icon={BiAbacus} />
      <Box text="hghgh" Icon={BiAbacus} />
    </div>
  );
}

export default SideBar;
