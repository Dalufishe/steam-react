import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

import languages from "./languages.json";
import { Dialog, css } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const LanguageMenu = ({ children }) => {
  return (
    <div
      className={classNames(
        "z-20",
        "absolute top-5 right-0",
        "bg-[#171a21]",
        "shadow-md"
      )}
    >
      {children}
    </div>
  );
};

const LanguageMenuItem = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "py-[5px] px-[12px]",
        "w-[291px]",
        "text-[#B8B6B4] hover:text-[#ffffff]"
      )}
    >
      {children}
    </div>
  );
};

export default function Language() {
  const [popUp, setPopUp] = useState(false);
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setPopUp(true);
  };

  const handleClose = () => {
    setPopUp(false);
  };

  const handleSelect = (id) => {
    setSelect(true);
    handleClose();
  };
  const handleUnSlect = () => {
    setSelect(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClose);
    return () => {
      document.body.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div className={classNames("hover:text-white cursor-pointer", "relative")}>
      <div
        className="flex items-center gap-1"
        onClick={(evt) => {
          evt.stopPropagation();
          handleClick();
        }}
      >
        <p>語言</p>
        <AiOutlineCaretDown size="9px" />
      </div>
      {popUp && (
        <LanguageMenu>
          {languages.map((lan) => (
            <LanguageMenuItem
              key={lan.id}
              onClick={() => {
                handleSelect(lan.id);
              }}
            >
              {lan.name}
            </LanguageMenuItem>
          ))}
        </LanguageMenu>
      )}
      {/*  */}
      {/*  */}
      {/*  */}
      <Dialog onClose={handleUnSlect} open={select}>
        <div
          className={classNames(
            "w-[550px] h-48",
            "border border-t-[#067997]",
            "bg-[#26292e] text-white border-l-0 border-r-0 border-b-0",
            "py-8 px-10",
            css``
          )}
        >
          <p className={classNames("text-[32px]", "pb-8")}>更改語言</p>
          <CircularProgress color="inherit" />
        </div>
      </Dialog>
    </div>
  );
}
