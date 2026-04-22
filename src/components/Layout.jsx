import TopicPage from "./TopicPage";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;