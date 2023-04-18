import classNames from "classnames";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <div className={classNames("App", `bg-main`, "h-screen")}>
      {/* Navbar */}
      <Navbar />
      {/* Categories */}
      {/* Recommended */}
      {/* SpecialOffers */}
      {/* Browse */}
      {/* Footer */}
    </div>
  );
}

export default App;
