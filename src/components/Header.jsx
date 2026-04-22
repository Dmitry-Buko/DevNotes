import { useContext } from 'react'
import {ThemeContext} from "../provider/ThemeContext";
import logo from '../assets/react.svg'


const Header = () => {
  const {toggleTheme} = useContext(ThemeContext)
  return(
    <header>
      <img src={logo} alt="logo" />
      <button onClick={toggleTheme}>Переключить тему</button>
      <img className='github' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
    </header>
  )
}

export default Header