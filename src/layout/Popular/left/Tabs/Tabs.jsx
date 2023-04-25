import classNames from "classnames";

const Tabs = ({ children }) => {
  return (
    <ul className={classNames("h-[31px]", "mb-2", "flex", "list-none")}>
      {children}
    </ul>
  );
};

export default Tabs;
