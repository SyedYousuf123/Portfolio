import React from "react";
import Logo from "./Logo";
import { navlinks } from "../Constants";

const Nav = () => {
  return (
    <div className="bg-primary flex justify-around py-9 pt-9 items-center ls:sticky ls:top-0 ls:z-50">
      <Logo />
      <ul className="flex text-white font-bold space-x-11">
        {navlinks.map((item, index) => (
          <li key={index} className="sm:block hidden hover:text-secondary">
            <a key={index} href={`#${item.id}`}>{`${item.title}`}</a>
          </li>
        ))}
      </ul>
      <button className="bg-secondary text-white font-bold py-[5px] px-[17px] ss:py-[7px] ss:px-[23px] rounded-[30px] no-underline border-[2px] border-solid border-transparent transition-all duration-500 hover:scale-110">
        <a href="#contact">Contact Me</a>
      </button>
    </div>
  );
};

export default Nav;
