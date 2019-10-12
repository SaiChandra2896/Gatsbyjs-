import React from "react"

import { Link } from "gatsby"

//import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          Sai Chandra
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navlist}>
          <li>
            <Link
              className={headerStyles.navitem}
              activeClassName={headerStyles.activeNavitem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyles.navitem}
              activeClassName={headerStyles.activeNavitem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.navitem}
              activeClassName={headerStyles.activeNavitem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.navitem}
              activeClassName={headerStyles.activeNavitem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
