import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

export default function RcmImage({ image }) {
  return (
    <div
      className={classNames(
        "bg-white w-[65%]",
        "shadow-slate-950 shadow-sm",
        "z-10",
        // "shadow-slate-950 shadow-sm",
        css`
          background: url(${image});
        `
      )}
    ></div>
  );
}
