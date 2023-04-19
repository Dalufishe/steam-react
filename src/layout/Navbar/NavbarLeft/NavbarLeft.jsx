import classNames from "classnames";
import React from "react";

import LogoImage from "../../../assets/logo.png";

import { FiMenu } from "react-icons/fi";

export default function NavbarLeft() {
  return (
    <div
      className={classNames(
        // layout
        "flex",
        "items-center",
        "justify-center",
        "lg:justify-start",
        // padding
        "py-3 lg:py-8",
        "px-2 lg:px-0",
        // menu-absolute
        "relative",
        // response
        "w-full lg:w-auto"
      )}
    >
      {/* menu */}
      <div
        className={classNames(
          "lg:hidden",
          "text-[30px]",
          "text-white",
          "absolute",
          "left-3"
        )}
      >
        <FiMenu />
      </div>
      {/* logo */}
      <div
        className={classNames(
          "flex",
          "items-center",
          "font-semibold",
          "text-[24px]",
          "text-text1"
        )}
      >
        <img src={LogoImage} alt="logo" className="w-10 h-10 mr-3" />
        <div className="flex">
          <p>FTEAM</p>
          <span className="text-xs">&#174;</span>
        </div>
      </div>
    </div>
  );
}
