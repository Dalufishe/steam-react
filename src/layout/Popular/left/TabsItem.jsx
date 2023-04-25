import classNames from "classnames";
import React from "react";

const TabsItem = ({ children, active = false }) => {
  return (
    <li
      className={classNames(
        { "text-[13px]": !active, "text-[14px]": active },
        { "text-text3": !active, "text-white": active },
        "hover:text-white",
        { "bg-main": !active, "bg-main2": active },
        "px-[10px]",
        "rounded-sm rounded-b-none",
        "flex items-center",
        "cursor-pointer"
      )}
    >
      {children}
    </li>
  );
};

export default TabsItem;
