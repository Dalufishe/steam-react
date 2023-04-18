import classNames from "classnames";
import Navbar from "./layout/Navbar/Navbar";
import Categories from "./layout/Categories/Categories";

function App() {
  return (
    <div className={classNames("App", `bg-main`, "h-screen")}>
      {/* Navbar */}
      <Navbar />
      {/* Categories */}
      <Categories />
      {/* Recommended */}
      {/* SpecialOffers */}
      {/* Browse */}
      {/* Footer */}
    </div>
  );
}

export default App;
