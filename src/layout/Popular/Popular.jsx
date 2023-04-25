import { css } from "@emotion/css";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

import TabsItem from "./left/TabsItem";
import Games from "./left/Games/Games";
import GamesItem from "./left/GamesItem/GamesItem";
import GameCard from "./right/GameCard/GameCard";
import popular_api from "../../api/popular_api";
import Tabs from "./left/Tabs/Tabs";

export default function Popular() {
  const [games, setGames] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    popular_api.GET().then((data) => {
      setGames(data);
      setActive(games[0].id);
    });
  }, []);

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
            {games.map((game) => (
              <GamesItem
                key={game?.id}
                active={game?.id === active}
                onHover={() => {
                  setActive(game?.id);
                }}
                image={game?.image}
              >
                {game?.name}
              </GamesItem>
            ))}
          </Games>
        </div>
      </div>
      {/* RIGHT */}
      <div className={classNames("w-[308px] ml-[14px]", "flex items-stretch")}>
        {<GameCard name={games?.[active]?.name} />}
      </div>
    </div>
  );
}
