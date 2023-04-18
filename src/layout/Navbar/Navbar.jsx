import React from "react";

import classNames from "classnames";

import NavbarLeft from "./NavbarLeft/NavbarLeft";
import NavbarMiddle from "./NavbarMiddle/NavbarMiddle";
import NavbarRight from "./NavbarRight/NavbarRight";

export default function Navbar() {
  return (
    <div className={classNames("bg-navbar", "flex", "justify-center")}>
      <div
        className={classNames(
          "flex items-center relative",
          "w-full max-w-[1200px]"
        )}
      >
        {/* Left */}
        <NavbarLeft />
        {/* Middle */}
        <NavbarMiddle />
        {/* Right */}
        <NavbarRight />
      </div>
    </div>
  );
}
