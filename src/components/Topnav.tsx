import React from "react";
import NavIcon from "../assets/svgs/nav-icon.svg";

export interface TopnavProps {
  handleSidebarMenu: Function;
}

const Topnav = (props: TopnavProps) => {
  return (
    <nav className="lg:px-10 md:px-7 px-5 flex lg:justify-end md:justify-between justify-between items-center py-4 ">
      <img
        src={NavIcon}
        alt="NavIcon"
        onClick={() => props.handleSidebarMenu()}
        className="w-5 cursor-pointer lg:hidden md:block block"
      />
      <div className="w-[40px] h-[40px] bg-dgPurple text-dgLightPurple rounded-full flex justify-center items-center text-sm cursor-pointer font-bold">
        YM
      </div>
    </nav>
  );
};

export default Topnav;
