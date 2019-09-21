/**
 * Menu component place at top of page.
 * Show current section of center
 */

import React from 'react';
import { Link } from "gatsby"

const Menu = () => {
  return (
    <menu>
      <li>
        <Link to="/japanito/">Japanito</Link>
      </li>
      <li>
        <Link to="/up-trade/">UpTrader</Link>
      </li>
    </menu>
  )
}

export default Menu;
