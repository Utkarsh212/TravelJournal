import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'

export default function Header(){
    return (
        <header className="header-section">
            <FaGlobeAmericas className="header--icon"/>
            <p className="header--text">my travel journal.</p>
        </header>
    )
}