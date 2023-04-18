import classNames from "classnames";
import React from "react";

export default function MenuListItem({ children, onClick }) {
  return (
    <div
      className={classNames(
        "text-[14px]",
        "py-2 px-4",
        "text-text1 hover:text-white",
        "cursor-pointer"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
