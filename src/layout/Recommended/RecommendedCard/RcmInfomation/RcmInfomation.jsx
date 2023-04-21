import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

import { RiWindowsFill } from "react-icons/ri";

const Photo = () => {
  return (
    <div className="w-[50%] pr-[10px] pt-[10px] opacity-60 hover:opacity-100">
      <div
        className={classNames(
          "w-[100%] h-[69px]",
          css`
            background: url("https://cdn.akamai.steamstatic.com/steam/apps/1203220/ss_fede743af03b94e8ccd8c1d8f156916acdce7723.600x338.jpg");
            background-size: 100%;
          `
        )}
      ></div>
    </div>
  );
};

export default function RcmInfomation({ title }) {
  return (
    <div
      className={classNames(
        "bg-black w-[35%]",
        "border border-slate-700",
        "shadow-slate-950 shadow-sm",
        "relative",
        css`
          background: linear-gradient(
            180deg,
            #0a141d 0%,
            rgba(10, 20, 29, 0.2) 100%
          );
          background-image: url(https://store.akamai.steamstatic.com/public/images/v6/home/background_maincap_2.jpg);
        `
      )}
    >
      {/* title */}
      <div className={classNames("h-[69px] pl-3", "flex items-center")}>
        <p className="text-[24px] pt-3">{title}</p>
      </div>
      {/* photos */}
      <div className="flex flex-wrap w-full">
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
      {/* description */}
      <div>
        <p className="text-[160%] px-3 pt-3">現已推出</p>
        <span
          className={classNames(
            "rounded-sm",
            "mx-3 px-2 pb-0.5",
            "bg-slate-600"
          )}
        >
          暢銷商品
        </span>
      </div>
      {/* details */}
      <div
        className={classNames(
          "absolute bottom-0",
          "w-full flex justify-between",
          "px-3 pb-2"
        )}
      >
        <p>免費遊玩</p>
        <RiWindowsFill size="20px" />
      </div>
    </div>
  );
}
