import React, { Fragment, useState } from "react";
import MENUITEMS from "./nav";
import NavItem from "./navItem";

export default function MenuNav() {
  const [menuitems, setMenuitems] = useState(MENUITEMS());

  console.log("menuitems=> ", menuitems);

  return (
    <Fragment>
      {menuitems.map((Item, itemi) => (
        <Fragment key={itemi}>
          <li className="nav-header">
            <span className="nav-label">{Item.menutitle}</span>
          </li>
          {Item.Items.map((menuItems, i) => (
            <NavItem menuItem={menuItems} key={i}></NavItem>
          ))}
        </Fragment>
      ))}
    </Fragment>
  );
}
