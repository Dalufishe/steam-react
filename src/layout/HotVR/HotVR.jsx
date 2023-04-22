import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

const HotVRCard = ({ price, image }) => {
  return (
    <div
      className={classNames(
        "w-[229px] h-[133px]",
        "relative",
        css`
          > :last-child {
            background: linear-gradient(
              -45deg,
              rgba(64, 121, 153, 1) 5%,
              rgba(42, 62, 89, 1) 95%
            );
          }
          &:hover {
            > :last-child {
              background: linear-gradient(
                to right,
                rgba(56, 107, 135, 1) 5%,
                rgba(68, 130, 163, 1) 95%
              );
            }
          }
        `
      )}
    >
      <img className="w-full h-[106px]" src={image} />
      <div
        className={classNames(
          "absolute bottom-0",
          "w-full h-[27px]",
          "p-[5px]"
        )}
      >
        {/* price */}
        <div>{price}</div>
      </div>
    </div>
  );
};

export default function HotVR() {
  return (
    <div
      className={classNames("mt-10", "text-white", "text-[80%]", "w-[940px]")}
    >
      <div className="flex justify-between">
        {/* title */}
        <h6 className="mb-[10px] text-[110%]">熱門 VR 遊戲</h6>
        {/* btn */}
        <div
          className={classNames(
            "mb-[10px] text-[110%]",
            "cursor-pointer",
            "border border-text1 hover:border-white",
            "px-[15px]"
          )}
        >
          瀏覽全部
        </div>
      </div>
      {/* cards */}
      <div className={classNames("w-full flex gap-2")}>
        <HotVRCard
          image="https://cdn.akamai.steamstatic.com/steam/apps/2363140/header_292x136.jpg?t=1681495082"
          price="免費遊玩"
        />
        <HotVRCard
          image="https://cdn.akamai.steamstatic.com/steam/apps/617830/header_292x136.jpg?t=1667473729"
          price="免費遊玩"
        />
        <HotVRCard
          image="https://cdn.akamai.steamstatic.com/steam/apps/1032670/header_292x136.jpg?t=1630300278"
          price="免費遊玩"
        />
        <HotVRCard
          image="https://cdn.akamai.steamstatic.com/steam/apps/546560/header_292x136.jpg?t=1673391297"
          price="免費遊玩"
        />
      </div>
    </div>
  );
}
