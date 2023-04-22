import classNames from "classnames";
import React from "react";
import FteamSwiper from "../../components/FteamSwiper/FteamSwiper";
import { css } from "@emotion/css";
import useHover from "../../hooks/useHover";

const CatCard = ({ children }) => {
  return <div className="w-full flex gap-3">{children}</div>;
};

const CatItem = ({ img, bg, children }) => {
  return (
    <div className={classNames("relative", "w-[225px] h-[223px]")}>
      <div
        className={classNames(
          "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
          "w-full h-full hover:w-[235px] hover:h-[233px]",
          css`
            transition: width 0.1s ease-out, height 0.1s ease-out;
            background: url(${img});
            &:hover {
              filter: brightness(1.25);
            }
          `
        )}
      >
        {/* gradient */}
        <div
          className={classNames(
            "absolute",
            "w-full h-full",
            css`
              background: ${bg};
            `
          )}
        />
        {/* title */}
        <div className="text-[16px] font-bold absolute bottom-6 left-[50%] translate-x-[-50%]">
          {children}
        </div>
      </div>
      )
    </div>
  );
};

export default function BrowseCat() {
  return (
    <div
      className={classNames("w-[940px]", "text-white", "mt-28", "text-[80%] ")}
    >
      <h6 className="mb-[10px] text-[110%]">依類別瀏覽</h6>
      <FteamSwiper pagination>
        <CatCard>
          <CatItem
            img="https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=tchinese"
            bg="linear-gradient(rgba(0,0,0,0), rgb(139,0,0) 100%)"
          >
            視覺小說
          </CatItem>
          <CatItem
            img="https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=tchinese"
            bg="linear-gradient(rgba(0,0,0,0), rgb(0,0,139) 100%)"
          >
            策略
          </CatItem>
          <CatItem
            img="https://store.steampowered.com/categories/homepageimage/category/exploration_open_world?cc=us&l=tchinese"
            bg="linear-gradient(rgba(0,0,0,0), rgb(184,134,11) 100%)"
          >
            開放世界
          </CatItem>
          <CatItem
            img="https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=tchinese"
            bg="linear-gradient(rgba(0,0,0,0), rgb(0,100,0) 100%)"
          >
            角色扮演
          </CatItem>
        </CatCard>
        <CatCard>
          <CatItem
            img="https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=tchinese"
            bg="linear-gradient(rgba(0,0,0,0), rgb(0,139,139) 100%)"
          >
            恐怖
          </CatItem>
          <CatItem
            img="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=tchinese"
            bg="linear-gradient(rgba(0,0,0,0), rgb(139,0,139) 100%)"
          >
            日本動畫
          </CatItem>
          <CatItem
            img="https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=tchinese"
            bg="linear-gradient(rgba(0,0,0,0), rgb(233,140,0) 100%)"
          >
            競速
          </CatItem>
          <CatItem
            img="https://store.steampowered.com/categories/homepageimage/category/multiplayer_coop?cc=us&l=tchinese"
            bg="linear-gradient(rgba(0,0,0,0), rgb(139,0,0) 100%)"
          >
            合作
          </CatItem>
        </CatCard>
      </FteamSwiper>
    </div>
  );
}
