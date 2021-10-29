import React from 'react'

import { ReactComponent as MoonIcon } from 'assets/svg/moon.svg'
import { ReactComponent as SunnyIcon } from 'assets/svg/sunny.svg'

import './theme-toggle.scss'

export default function ThemeToggle({ isDarkMode = true, onToggle }) {
  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isDarkMode ? 'enabled' : 'disabled'}`}>
        <div className="icons">
          <SunnyIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          onChange={(e) => e.target.checked}
          checked={isDarkMode}
          onClick={onToggle}
        />
      </div>
    </label>
  )
}
