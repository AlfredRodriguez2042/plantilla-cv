import React, { createRef } from 'react'
import { NavLink } from 'react-router-dom'


const menu = createRef()
const toggleMenu = ()=>(
    menu.current.classList.toggle("show")
)

const MainMenu = () => {
    return (
        <div className="content__menu">
          
        <div 
        className="menu__toggle"
        onClick={toggleMenu}
         ref={menu}>
        <nav className="main__menu">
            <ul className="menu">
                <li className="menu__item"> <NavLink  exact to="/">Home</NavLink> </li>
                <li className="menu__item"> <NavLink  exact to="/about">About</NavLink> </li>
                <li className="menu__item"> <NavLink  exact to="/contact">Contact</NavLink> </li>
            
           { /*
                <li className="menu__item"> <NavLink  exact to="/signin">SignIn</NavLink> </li>
           <li className="menu__item"> <NavLink  exact to="/signup">SignUp</NavLink> </li>  */}
            </ul>
        </nav>
       
        </div>
        </div>
           
    )
}

export default MainMenu
