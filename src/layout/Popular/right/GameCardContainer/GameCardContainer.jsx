import { css } from "@emotion/css";
import { useTheme } from "@mui/material";
import classNames from "classnames";
import React from "react";

export default function GameCardContainer({ children }) {
  const theme = useTheme();
  return (
    <div
      className={classNames(
        "relative",
        "w-full h-full",
        css`
          background: ${theme.palette.custom.background_light[1]};
        `
      )}
    >
      {children}
    </div>
  );
}
