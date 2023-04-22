import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

const BrowseBtn = ({ children }) => {
  return (
    <div
      className={classNames(
        "w-[229px] h-[58px] rounded-[3px]",
        "flex items-center justify-center",
        css`
          background: linear-gradient(90deg, #06bfff 0%, #2d73ff 100%);
          &:hover {
            background: linear-gradient(90deg, #06bfff 30%, #2d73ff 100%);
          }
        `
      )}
    >
      <p className="text-[16px]">{children}</p>
    </div>
  );
};

export default function BrowseFtm() {
  return (
    <div
      className={classNames("w-[940px]", "text-white", "mt-28", "text-[80%]")}
    >
      <h6 className="mb-[10px] text-[110%]">瀏覽 Fteam</h6>
      <div className="w-full flex gap-2">
        <BrowseBtn>新推出</BrowseBtn>
        <BrowseBtn>特惠</BrowseBtn>
        <BrowseBtn>免費遊戲</BrowseBtn>
        <BrowseBtn>依使用者標籤</BrowseBtn>
      </div>
    </div>
  );
}
