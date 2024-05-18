import Link from "next/link";
import React from "react";

type Child = {
  path: string;
  type: string;
  active: boolean;
  selected: boolean;
  title: string;
};

type NavSubItemPropsWithComponent = {
  children: Child[];
};

export default function NavSubItem({ children }: NavSubItemPropsWithComponent) {
  return (
    <li className={`nav-item ${menuItems.selected ? "active" : ""}`}>
      <Link href="#" legacyBehavior>
        <a className="nav-link active">
          <span className="shape1"></span>
          <span className="shape2"></span>
          <i className={`ti-home sidemenu-icon menu-icon`}></i>
          <span className="sidemenu-label">Dashboard</span>
          <div className="according-menu">
            <i className={`hor-rightangle fa angle fa-angle-right `}></i>
          </div>
        </a>
      </Link>
    </li>
  );
}
