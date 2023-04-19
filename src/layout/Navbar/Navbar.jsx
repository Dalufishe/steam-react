import React from "react";

import classNames from "classnames";

import NavbarLeft from "./NavbarLeft/NavbarLeft";
import NavbarMiddle from "./NavbarMiddle/NavbarMiddle";
import NavbarRight from "./NavbarRight/NavbarRight";

export default function Navbar() {
  return (
    <div
      className={classNames(
        "text-[80%]",
        "bg-navbar",
        "flex",
        "justify-center"
      )}
    >
      <div
        className={classNames(
          "flex items-center relative",
          "w-full max-w-[940px]"
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
