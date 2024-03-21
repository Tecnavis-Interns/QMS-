import React from "react";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-xl items-center">
      <div>
        <h2 className="font-semibold">Queue Management System</h2>
      </div>
      <div className="flex gap-5 items-center">
        <a href="#about">About</a>
        <a href="#about">Contact</a>
        <Button className="bg-[#6236F5] p-2 px-5 rounded-md text-white">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
