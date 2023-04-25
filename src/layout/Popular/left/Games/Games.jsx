import classNames from "classnames";
import React from "react";

const Games = ({ children }) => {
  return (
    <div className={classNames("flex flex-col gap-[5px]")}>{children}</div>
  );
};

export default Games;
