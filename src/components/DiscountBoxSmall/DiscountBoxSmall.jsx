import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

export default function DiscountBoxSmall({ discount, prevPrice, price }) {
  return (
    <div className={classNames("h-[17px]", "text-[12px]", "w-fit flex")}>
      {/* discount */}
      {discount && (
        <div className={classNames("px-[3px]", "text-[#BEEE11] bg-[#4c6b22]")}>
          {discount}
        </div>
      )}
      <div className="px-[5px] flex bg-[rgba(20,31,44,0.4)]">
        {/* prevPrice */}
        <div
          className={classNames(
            "pr-1",
            "text-[#738895]",
            "relative",
            css`
              &:: before {
                content: "";
                position: absolute;
                left: 0px;
                right: 0px;
                top: 43%;
                border-bottom: 1.5px solid #738895;
                transform: skewY(-8deg);
                box-shadow: 0 0 2px black;
              }
            `
          )}
        >
          NT$ {prevPrice}
        </div>
        {/* price */}
        <div className={classNames("text-[#BEEE11]")}>NT$ {price}</div>
      </div>
    </div>
  );
}
