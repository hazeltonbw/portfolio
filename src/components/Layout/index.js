import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import { StyledLayout } from "./Layout";

const Layout = () => {
  return (
    <StyledLayout>
      <NavBar />
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
