import { Outlet } from "react-router-dom";
import TopicPage from "./TopicPage";
import NavBar from "./NavBar";
import { useContext } from "react";
import {ThemeContext} from "../provider/ThemeContext";

const Layout = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`container ${theme}`}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;