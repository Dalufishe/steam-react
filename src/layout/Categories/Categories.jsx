import { css } from "@emotion/css";
import classNames from "classnames";
import React from "react";

import { BsSearch } from "react-icons/bs";

const categoriesItems = [
  { name: "您的商店" },
  { name: "矚目新品" },
  { name: "類別" },
  { name: "點數商店" },
  { name: "新聞" },
  { name: "實驗室" },
];

export default function Categories({
}) {
  return (
    // container
    <div className={classNames("text-[80%] w-full flex justify-center")}>
        {/* categories bar */}
        <div
          className={classNames(
            "w-[940px] mt-8",
            "flex justify-between",
            "text-white",
            "shadow-slate-950",
            "shadow-sm",
            //   background
            css`
              background: linear-gradient(
                90deg,
                rgba(62, 103, 150, 0.919) 11.38%,
                rgba(58, 120, 177, 0.8) 25.23%,
                rgb(15, 33, 110) 100%
              );
            `
          )}
        >
          {/* menu */}
          <ul className={classNames("flex")}>
            {categoriesItems.map((item) => (
              //   menu item
              <li
                key={item.name}
                className={classNames(
                  "pl-[15px] pr-[10px] py-1",
                  "flex items-center",
                  "cursor-pointer",
                  //   background
                  css`
                    &:hover {
                      background: linear-gradient(
                        90deg,
                        rgba(33, 162, 255, 0.25) 0%,
                        rgba(33, 162, 255, 0.15) 50%,
                        rgba(50, 50, 51, 0) 100%
                      );
                    }
                  `
                )}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
          {/* search */}
          <div
            className={classNames(
              "bg-[#316282]",
              "m-1",
              "flex",
              "hover:outline outline-[#549dc9] outline-1"
            )}
          >
            <input
              className={classNames(
                "bg-[#316282]",
                "pl-3.5",
                "outline-none",
                "rounded-sm"
              )}
              placeholder="搜尋"
            />
            <div
              className={classNames(
                "bg-[#549dc9]",
                "flex items-center p-2",
                "border",
                "border-[#316282]",
                "text-main"
              )}
            >
              <BsSearch />
            </div>
          </div>
        </div>
    </div>
  );
}
