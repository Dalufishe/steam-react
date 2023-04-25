import { css } from "@emotion/css";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

import { SiWindows11 } from "react-icons/si";
import useHover from "../../hooks/useHover";
import { Typography } from "@mui/material";

const LIGHT_BG = [
  "linear-gradient(to right, #c6e6f8 5%, #95bcd3 95%)",
  "linear-gradient( to right, #95bbd4 5%,#859bac 95%)",
  "#95bbd4",
];

const games = [
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
  {
    name: "心淵夢境",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1701520/capsule_184x69.jpg?t=1682413373",
  },
];

const Tabs = ({ children }) => {
  return (
    <ul className={classNames("h-[31px]", "mb-2", "flex", "list-none")}>
      {children}
    </ul>
  );
};

const TabsItem = ({ children, active = false }) => {
  return (
    <li
      className={classNames(
        { "text-[13px]": !active, "text-[14px]": active },
        { "text-text3": !active, "text-white": active },
        "hover:text-white",
        { "bg-main": !active, "bg-main2": active },
        "px-[10px]",
        "rounded-sm rounded-b-none",
        "flex items-center",
        "cursor-pointer"
      )}
    >
      {children}
    </li>
  );
};

const Games = ({ children }) => {
  return (
    <div className={classNames("flex flex-col gap-[5px]")}>{children}</div>
  );
};

const GamesItem = ({
  children,
  image,
  price = 0,
  active = false,
  onHover = () => {},
}) => {
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
            background: ${LIGHT_BG[0]};
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

            `bg-[${LIGHT_BG[2]}]`
          )}
        ></div>
      )}
    </div>
  );
};

const GameCard = ({}) => {
  return (
    <div
      className={classNames(
        "mt-[39px]",
        "w-full",
        "p-3",
        css`
          background: ${LIGHT_BG[1]};
        `
      )}
    >
      {/* title */}
      <p className="text-[21px] text-black mb-2">心淵夢境</p>
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
        {["類銀河戰士惡魔城", "橫向捲軸", "探索", "2D 平台"].map((item) => (
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

export default function Popular() {
  const [active, setActive] = useState(0);
  return (
    <div
      className={classNames(
        "w-[940px]",
        "mt-[-30px]",
        "mb-16",
        "text-white text-[80%]",
        "flex"
      )}
    >
      {/* LEFT */}
      <div className={classNames("w-[618px]")}>
        {/* tabs */}
        <Tabs>
          <TabsItem active>新品與話題商品</TabsItem>
          <TabsItem>暢銷商品</TabsItem>
          <TabsItem>熱門即將發行</TabsItem>
          <TabsItem>特惠</TabsItem>
        </Tabs>
        {/* box */}
        <div className={classNames("w-full text-text1")}>
          {/* top-part */}
          <div
            className={classNames(
              "flex justify-end items-center",
              "w-full",
              "h-9",
              "p-1",
              css`
                background: rgba(0, 0, 0, 0.2);
              `
            )}
          >
            <p>查看更多：</p>
            <div
              className={classNames(
                "cursor-pointer",
                "px-[15px]",
                "text-[12px]",
                "leading-6",
                "text-white",
                "border border-text1 hover:border-white"
              )}
            >
              新推出
            </div>
          </div>
          {/* main-part */}
          <Games>
            {games.map((game, index) => (
              <GamesItem
                active={index === active}
                onHover={() => {
                  setActive(index);
                }}
                key={game.name}
                image={game.image}
              >
                {game.name}
              </GamesItem>
            ))}
          </Games>
        </div>
      </div>
      {/* RIGHT */}
      <div className={classNames("w-[308px] ml-[14px]", "flex items-stretch")}>
        <GameCard />
      </div>
    </div>
  );
}
