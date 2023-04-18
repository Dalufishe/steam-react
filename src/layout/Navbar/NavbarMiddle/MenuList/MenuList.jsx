import classNames from "classnames";
import React from "react";

export default function MenuList({ children }) {
  return (
    <div
      className={classNames(
        "w-[100px]",
        "bg-[#171a21]",
        "absolute top-7",
        " shadow-sm shadow-slate-950"
      )}
    >
      {children}
    </div>
  );
}
