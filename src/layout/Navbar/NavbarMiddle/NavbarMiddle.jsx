import classNames from "classnames";
import React from "react";
import MenuList from "./MenuList/MenuList";
import useHover from "../../../hooks/useHover";
import MenuListItem from "./MenuList/MenuListItem/MenuListItem";

const shopMenuList = [
  { name: "首頁" },
  { name: "探索佇列" },
  { name: "願望清單" },
  { name: "點數商店" },
  { name: "新聞" },
  { name: "統計資料" },
];

const commuMenuList = [
  { name: "首頁" },
  { name: "討論區" },
  { name: "工作坊" },
  { name: "市集" },
  { name: "實況直播" },
];

export default function NavbarMiddle() {
  const [shopHover, shopIsHover] = useHover();
  const [commuHover, commuIsHover] = useHover();
  return (
    <ul
      className={classNames(
        "pl-16",
        "hidden lg:flex",
        "text-text1",
        "text-[18px]",
        "gap-4"
      )}
    >
      <li ref={shopHover} className="relative">
        <p className="cursor-pointer">商店</p>
        {shopIsHover && (
          <MenuList>
            {shopMenuList.map((menuItem) => (
              <MenuListItem>{menuItem.name}</MenuListItem>
            ))}
          </MenuList>
        )}
      </li>
      <li ref={commuHover} className="relative">
        <p className="cursor-pointer">社群</p>
        {commuIsHover && (
          <MenuList>
            {commuMenuList.map((menuItem) => (
              <MenuListItem>{menuItem.name}</MenuListItem>
            ))}
          </MenuList>
        )}
      </li>
      <li>
        <p className="cursor-pointer">關於</p>
      </li>
      <li>
        <p className="cursor-pointer">客服中心</p>
      </li>
    </ul>
  );
}
