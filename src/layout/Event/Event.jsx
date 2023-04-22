import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

export default function Event({ children }) {
  return (
    <div
      className={classNames(
        "w-[99vw] h-[450px]",
        "flex justify-center items-start",
        css`
          background: url(https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/727ea0038db57df9987985bd/page_bg_tchinese.jpg?t=1682097863);
          background-size: cover;
        `
      )}
    >
      {children}
    </div>
  );
}
