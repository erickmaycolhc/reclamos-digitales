import Link from "next/link";
import React from "react";
import NavSubItem from "./navSubItem";

type Child = {
  path: string;
  type: string;
  active: boolean;
  selected: boolean;
  title: string;
};
type PropsWithComponent = {
  title: string;
  path: string;
  icon: string;
  type: string;
  active: boolean;
  selected: boolean;
  //children: Child[];
};
type NavItemPropsWithComponent = {
  menuItem: PropsWithComponent;
};

export default function NavItem({ menuItem }: NavItemPropsWithComponent) {
  return (
    <li className={`nav-item ${menuItem.selected ? "active" : ""}`}>
      <Link href={`${menuItem.path}`} passHref legacyBehavior>
        <a className="nav-link active">
          <span className="shape1"></span>
          <span className="shape2"></span>
          <i className={`${menuItem.icon} sidemenu-icon menu-icon`}></i>
          <span className="sidemenu-label">{menuItem.title}</span>
          <div className="according-menu">
            <i className={"undefined fa angle fa-angle-right "}></i>
          </div>
        </a>
      </Link>
    </li>
  );
}
