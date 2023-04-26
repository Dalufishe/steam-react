import { css, cx } from "@emotion/css";
import { Box, Fade, useTheme } from "@mui/material";
import classNames from "classnames";
import { useEffect, useState } from "react";

const GameCard = ({ tags, name, active = false }) => {
  const theme = useTheme();

  return (
    <div
      className={classNames(
        "absolute bottom-0",
        "w-full h-[771px]",
        "p-3",
        css`
          background: ${theme.palette.custom.background_light[1]};
        `,
        "transition-opacity duration-300",
        { "opacity-100": active, "opacity-0": !active }
      )}
    >
      {/* title */}
      <p
        className={classNames(
          "text-[21px] text-black mb-2",
          css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          `
        )}
      >
        {name}
      </p>
      {/* comment */}
      <div
        className={classNames(
          "mb-2",
          "w-[272px] h-[42px]",
          "px-[7px] py-[5px]",
          "text-[12px]",
          "rounded-sm",
          "leading-4",
          css`
            background: rgba(38, 54, 69, 0.6);
          `
        )}
      >
        <p className="text-text1">整體使用者評論：</p>
        <p className="text-text2">
          壓倒性好評
          <span> (106)</span>
        </p>
      </div>
      {/* group */}
      <div className="mb-1">
        {tags.map((item) => (
          <span
            key={item}
            className={classNames(
              "text-[12px]",
              "px-[7px] ml-[2px]",
              "rounded-sm",
              css`
                background: rgba(38, 54, 69, 0.6);
              `
            )}
          >
            {item}
          </span>
        ))}
      </div>
      {/* images */}
      <div className="flex flex-col gap-1">
        {[
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/ss_253b7d8e4a5ceaecc3d110cc58b7e982f2168585.600x338.jpg",
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/ss_192009069cf7a4a788854c4b39c752f5c077837b.600x338.jpg",
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/ss_573cdaced8f62c857e3593e273290b40a4f7c32c.600x338.jpg",
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/ss_06e56286010fda661d56c399ad9dd6dfb0de9d67.600x338.jpg",
        ].map((image) => (
          <img src={image} className="w-[274px] h-150px" />
        ))}
      </div>
    </div>
  );
};

export default GameCard;
