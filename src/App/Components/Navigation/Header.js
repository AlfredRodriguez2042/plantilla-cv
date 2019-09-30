import React from 'react'
import MainMenu from './MainMenu'

const Header = () => {
    return (
        <div className="main__header">
            <div className="logo">
                <h1>Kuro</h1>
            </div>
            <MainMenu/>
        </div>
    )
}

export default Header
