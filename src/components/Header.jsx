import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeContext";
import logo from "../assets/react.svg";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <img className="header__logo" src={logo} alt="logo" />
      <button className="header__toogle-theme" onClick={toggleTheme}>
        Переключить на {theme === "dark" ? "светлую" : "темную"} тему
      </button>
      <a className="header__github" href="https://github.com/Dmitry-Buko">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="github"
        />
      </a>
    </header>
  );
};

export default Header;
