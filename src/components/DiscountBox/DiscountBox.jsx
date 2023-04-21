import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

export default function DiscountBox({ discount, prevPrice, price }) {
  return (
    <div className="flex">
      {/* discount */}
      <div
        className={classNames(
          "text-[200%] font-bold",
          "bg-[#4c6b22] text-[#BEEE11]",
          "px-[5px]"
        )}
      >
        {discount}
      </div>
      {/* price */}
      {price && (
        <div
          className={classNames(
            "px-2",
            css`
              background: rgba(20, 31, 44, 0.8);
            `
          )}
        >
          {prevPrice && (
            <div
              className={classNames(
                "mb-[-4px]",
                "text-[11px] text-[#738895]",
                "w-fit",
                css`
                  position: relative;
                  &:before {
                    content: "";
                    left: 0px;
                    right: 0px;
                    position: absolute;
                    top: 45%;
                    border-bottom: 1.5px solid #738895;
                    transform: skewY(-8deg);
                    box-shadow: 0 0 2px black;
                  }
                `
              )}
            >
              NT$ {prevPrice}
            </div>
          )}
          {price && (
            <div className={classNames("text-[15px] text-[#BEEE11]", "w-fit")}>
              NT$ {price}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
