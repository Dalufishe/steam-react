import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

export default function StyledContainer({ children }) {
  return (
    <div
      className={classNames(
        "pb-10 px-16",
        css`
          background: url(https://store.akamai.steamstatic.com/public/images/v6/home/cluster_bg.png?v=1);
        `
      )}
    >
      {children}
    </div>
  );
}
