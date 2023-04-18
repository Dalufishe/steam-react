import classNames from "classnames";
import React from "react";

import { ImDownload } from "react-icons/im";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function NavbarRight() {
  return (
    <div
      className={classNames(
        "text-text1",
        "absolute top-2 right-0",
        "flex items-center gap-3",
        "hidden lg:flex"
      )}
    >
      {/* download steam */}
      <div
        className={classNames(
          "bg-[#5c7e10]",
          "flex items-center gap-2",
          "px-2 py-1",
          "hover:text-white",
          "cursor-pointer"
        )}
      >
        <ImDownload />
        <p>安裝 Fteam</p>
      </div>
      {/* login */}
      <div className="hover:text-white         cursor-pointer">
        <p>登入</p>
      </div>
      <div>|</div>
      {/* language */}
      <div
        className={classNames(
          "hover:text-white cursor-pointer",
          "flex items-center"
        )}
      >
        <p>語言</p>
        <AiOutlineCaretDown size="12px" />
      </div>
    </div>
  );
}
