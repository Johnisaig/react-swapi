/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

import ThemeToggle from 'components/theme-toggle/theme-toggle'
import AccentureLogoLight from 'assets/img/accenture-logo-light.webp'
import AccentureLogoDark from 'assets/img/accenture-logo-dark.png'

import './navbar.scss'

export default function header({ isDarkMode = true, onToggle }) {
  return (
    <div className="navagation">
      <div className="navbar-content">
        <div className="company-brand">
          <img
            src={isDarkMode ? AccentureLogoDark : AccentureLogoLight}
            className="accenture-brand"
            alt="accenture-brand"
          />
        </div>
        <div className="darkmode-container">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggle} />
        </div>
      </div>
    </div>
  )
}
