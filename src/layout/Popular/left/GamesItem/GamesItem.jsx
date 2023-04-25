import React, { useEffect } from "react";
import useHover from "../../../../hooks/useHover";
import classNames from "classnames";
import { css } from "@emotion/css";
import { SiWindows11 } from "react-icons/si";
import { useTheme } from "@mui/material";

const GamesItem = ({
  children,
  image,
  price = 0,
  active = false,
  onHover = () => {},
}) => {
  const theme = useTheme();
  const [hover, isHover] = useHover();
  useEffect(() => {
    if (isHover) {
      onHover();
    }
  }, [isHover]);
  return (
    <div
      ref={hover}
      className={classNames(
        "w-full h-[69px]",
        "flex justify-between",
        "relative",
        css`
          background: rgba(0, 0, 0, 0.2);
        `,
        {
          [css`
            background: ${theme.palette.custom.background_light[0]};
            p,
            div {
              color: black;
            }
          `]: active,
        }
      )}
    >
      {/* image */}
      <img src={image} alt={children} className="w-[184px]" />
      {/* main */}
      <div className={classNames("w-[420px]", "flex flex-col justify-center")}>
        <p className="text-[15px] text-[#c7d5e0]">{children}</p>
        <SiWindows11 className="ml-1 w-4 h-4 text-[#384959] opacity-80" />
        <p className="flex text-[#384959]">
          <div>類銀河戰士惡魔城</div>
          <div>, 橫向捲軸</div>
          <div>, 探索</div>
          <div>, 2D 平台</div>
        </p>
      </div>
      {/* price */}
      <div
        className={classNames(
          "absolute top-[50%] right-8 translate-y-[-50%]",
          "text-white text-[15px]"
        )}
      >
        {price === 0 ? "免費" : `NT$ ${price}`}
      </div>
      {/* active display */}
      {active && (
        <div
          className={classNames(
            "absolute",
            "right-[-14px]",
            "w-[14px] h-[69px]",

            `bg-[${theme.palette.custom.background_light[2]}]`
          )}
        ></div>
      )}
    </div>
  );
};

export default GamesItem;
