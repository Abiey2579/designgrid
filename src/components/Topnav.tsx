import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { account } from "../authentication/appwrite-auth";

export interface TopnavProps {
  handleSidebarMenu: Function;
}

const Topnav = (props: TopnavProps) => {
  const logout = async () => {
    await account
      .deleteSessions()
      .then(() => {
        window.location.replace("http://localhost:3000/login");
      })
      .catch((error) => alert("Unable to Logout"));
  };
  return (
    <nav className="lg:px-10 md:px-7 px-5 flex lg:justify-end md:justify-between justify-between items-center py-4 ">
      <Bars3Icon
        onClick={() => props.handleSidebarMenu()}
        className="w-8 cursor-pointer lg:hidden md:block block"
      />
      <div
        onClick={() => logout()}
        className="w-[40px] h-[40px] bg-dgPurple text-dgLightPurple rounded-full flex justify-center items-center text-sm cursor-pointer font-bold"
      >
        YM
      </div>
    </nav>
  );
};

export default Topnav;
