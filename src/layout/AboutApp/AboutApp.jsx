import { Dialog, Link, Typography } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";

export default function AboutApp() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <div
        className={classNames(
          "w-[550px]",
          "border border-t-[#067997] border-b-[#067997]",
          "bg-[#26292e] text-text1 border-l-0 border-r-0",
          "py-8 px-10"
        )}
      >
        <Typography variant="h6" fontWeight={900} className="text-white pb-3">
          關於
        </Typography>
        <Typography className="pb-3">
          steam-react（Fteam）是一個開源項目，旨在使用
          React、Redux、MUI、tailwindcss 等技術實現的 steam 前端克隆網頁。
        </Typography>
        <Typography className="pb-3">
          本項目不屬於 Steam® 版權所有，為 Dalufishe 開發，並不以營利為目的。
        </Typography>
        <Typography className="pb-4">
          你可以在這裡聯繫到我{" "}
          <Link href="http://discordapp.com/users/520869862650937364">
            點擊
          </Link>
        </Typography>
        <Typography className="pb-4">
          本項目倉庫地址 github{" "}
          <Link href="https://github.com/Clone-Gang/steam-react">點擊</Link>
        </Typography>
        <Typography className="pb-3">
          本項目中
          Steam，Valve，及其他示範遊戲軟體相關圖示隸屬於相對應之公司之商標。
        </Typography>
      </div>
      <div className={classNames("bg-[#26292e]", "p-4", "flex justify-end")}>
        <button
          onClick={handleClose}
          className={classNames(
            "bg-text1 text-main",
            "px-3 py-1",
            "rounded-sm"
          )}
        >
          我知道了
        </button>
      </div>
    </Dialog>
  );
}
