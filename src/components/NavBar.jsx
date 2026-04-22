import { NavLink } from "react-router-dom";
import { topics } from "../data/topic";

const NavBar = () => {
  return (
    <nav className="navigation">
      {topics.map((topic) => (
        <NavLink key={topic.id} to={topic.path} className="nav-link">
          {topic.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
