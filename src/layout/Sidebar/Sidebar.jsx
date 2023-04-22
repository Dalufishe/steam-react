import classNames from "classnames";
import React from "react";

import SidebarImage from "../../assets/sidebar/sidebarimage.png";
import SidebarIconsImage from "../../assets/sidebar/sidebaricons.png";

import { css } from "@emotion/css";

const Menu = ({ title, children }) => {
  return (
    <div className="leading-4 mb-[14px] text-[12px] text-text1">
      <p className="mb-[7px]">{title}</p>
      {children}
    </div>
  );
};

const MenuItem = ({ icon, offest, children }) => {
  return (
    <div className="mb-[7px] text-[13px] text-text2">
      <div className="flex gap-2 items-center">
        {icon && (
          <div
            className={classNames(
              "w-4 h-4",
              css`
                background: url(${icon});
                background-position: ${16 * offest}px 0px;
              `
            )}
          ></div>
        )}
        <a href="" className="text-inherit hover:text-white">
          {children}
        </a>
      </div>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className={classNames("w-[210px]")}>
      {/* image */}
      <img src={SidebarImage} alt="sidebar_image" className="mb-1" />
      {/* menu */}
      {/*  */}
      <Menu title="禮物卡">
        <MenuItem>現已於 Steam 上推出</MenuItem>
      </Menu>
      {/*  */}
      <Menu title="推薦">
        <MenuItem icon={SidebarIconsImage}>好友</MenuItem>
        <MenuItem icon={SidebarIconsImage} offest={-1}>
          鑑賞家
        </MenuItem>
        <MenuItem icon={SidebarIconsImage} offest={-2}>
          標籤
        </MenuItem>
      </Menu>
      {/*  */}
      <Menu title="探索佇列">
        <MenuItem icon={SidebarIconsImage} offest={-3}>
          推薦商品
        </MenuItem>
        <MenuItem icon={SidebarIconsImage} offest={-4}>
          新推出
        </MenuItem>
      </Menu>
      {/*  */}
      <Menu title="瀏覽分類">
        <MenuItem icon={SidebarIconsImage} offest={-5}>
          暢銷新品
        </MenuItem>
        <MenuItem icon={SidebarIconsImage} offest={-6}>
          新推出
        </MenuItem>
        <MenuItem icon={SidebarIconsImage} offest={-7}>
          即將發行
        </MenuItem>
        <MenuItem icon={SidebarIconsImage} offest={-8}>
          特惠
        </MenuItem>
        <MenuItem icon={SidebarIconsImage} offest={-9}>
          VR 相關產品
        </MenuItem>
        <MenuItem icon={SidebarIconsImage} offest={-10}>
          支援控制器
        </MenuItem>
      </Menu>
      {/*  */}
      <Menu title="依類型瀏覽">
        <MenuItem>免費遊玩</MenuItem>
        <MenuItem>搶先體驗</MenuItem>
        <MenuItem>休閒</MenuItem>
        <MenuItem>冒險</MenuItem>
        <MenuItem>動作</MenuItem>
        <MenuItem>大型多人</MenuItem>
        <MenuItem>模擬</MenuItem>
        <MenuItem>獨立</MenuItem>
        <MenuItem>競速</MenuItem>
        <MenuItem>策略</MenuItem>
        <MenuItem>角色扮演</MenuItem>
        <MenuItem>運動</MenuItem>
      </Menu>
      {/*  */}
      <Menu title="近期檢視">
        <MenuItem>Minecraft Legends</MenuItem>
      </Menu>
    </div>
  );
}
