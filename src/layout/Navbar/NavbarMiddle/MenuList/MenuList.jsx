import classNames from "classnames";
import React from "react";

export default function MenuList({ children }) {
  return (
    <div
      className={classNames(
        "w-[88px]",
        "bg-[#171a21]",
        "absolute top-6",
        " shadow-sm shadow-slate-950"
      )}
    >
      {children}
    </div>
  );
}
