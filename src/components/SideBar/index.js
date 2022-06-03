import {} from "./SideBar";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        {/* <img src="" alt="logo" /> */}
        {/* TODO: Create logo image */}
        <h1>Hazelton</h1>
      </Link>
    </div>
  );
};

export default SideBar;
