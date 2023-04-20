import { css } from "@emotion/css";
import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const LeftArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "absolute top-[50%] left-[-45px] translate-y-[-50%]",
        "w-[45px] h-[108px]",
        "flex items-center justify-center",
        css`
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3) 5%,
            rgba(0, 0, 0, 0) 95%
          );
          &:hover {
            background: linear-gradient(
              to right,
              rgba(171, 218, 244, 0.3) 5%,
              rgba(171, 218, 244, 0) 95%
            );
          }
        `
      )}
    >
      <MdArrowBackIosNew size="50px" />
    </div>
  );
};

const RightArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "absolute top-[50%] right-[-45px] translate-y-[-50%]",
        "w-[45px] h-[108px]",
        "flex items-center justify-center",
        css`
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 5%,
            rgba(0, 0, 0, 0.3) 95%
          );
          &:hover {
            background: linear-gradient(
              to right,
              rgba(171, 218, 244, 0) 5%,
              rgba(171, 218, 244, 0.3) 95%
            );
          }
        `
      )}
    >
      <MdArrowForwardIos size="50px" />
    </div>
  );
};

const Pagination = ({ size, index, onClick }) => {
  const [sizeArray, setSizeArray] = useState([]);
  useEffect(() => {
    let array = [];
    for (let i = 0; i < size; i++) {
      array.push(i);
    }
    setSizeArray(array);
  }, [size]);
  return (
    <div
      className={classNames(
        "absolute bottom-[-24px] left-[50%] translate-x-[-50%]",
        "flex gap-1"
      )}
    >
      {sizeArray.map((i) => (
        <div
          key={i}
          onClick={() => {
            onClick(i);
          }}
          className={classNames(
            "w-[15px] h-[9px]",
            "rounded-sm",
            "cursor-pointer",
            css`
              background: ${i === index
                ? "hsla(202,60%,100%,0.5)"
                : "hsla(202, 60%, 100%, 0.2)"};
              &:hover {
                background: hsla(202, 60%, 100%, 0.3);
              }
            `
          )}
        ></div>
      ))}
    </div>
  );
};

export default function FteamSwiper({ children, pagination = false }) {
  const size = useRef(children?.length || 1);
  const [index, setIndex] = useState(0);

  const handleLeftArrowClick = useCallback(() => {
    if (index - 1 < 0) {
      // to end
      setIndex(size.current - 1);
    } else {
      setIndex(index - 1);
    }
  });
  const handleRightArrowClick = useCallback(() => {
    if (index + 1 === size.current) {
      // to begin
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  });
  const handlePaginationClick = useCallback((i) => {
    setIndex(i);
  });
  return (
    <div className={classNames("relative", "w-full")}>
      {/* left-arrow */}
      <LeftArrow onClick={handleLeftArrowClick} />
      {/* major part */}
      {Array.isArray(children)
        ? children.map((item, i) => {
            return (
              <div
                className={classNames(
                  "w-full",
                  {
                    "z-20 relative opacity-100": i === index,
                  },
                  {
                    "z-10 absolute top-0 left-0 opacity-0": i !== index,
                  },
                  css`
                    transition: opacity 0.3s ease-out;
                  `
                )}
              >
                {item}
              </div>
            );
          })
        : children}
      {/* right-arrow */}
      <RightArrow onClick={handleRightArrowClick} />
      {/* pagination */}
      {pagination && (
        <Pagination
          size={size.current}
          index={index}
          onClick={handlePaginationClick}
        />
      )}
    </div>
  );
}
