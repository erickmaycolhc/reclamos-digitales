import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { MENUITEMS } from "./nav";

//Images
import logolight from "../../../../public/images/brand/logo-light.png";
import iconlight from "../../../../public/images/brand/icon-light.png";
import logo from "../../../../public/images/brand/logo.png";
import icon from "../../../../public/images/brand/icon.png";
import MenuNav from "./menuNav";

const SideBar = () => {
  // //Hover effect
  function Onhover() {
    /*if (document.querySelector(".main-body")) {
      if (
        document
          .querySelector(".main-body")
          .classList.contains("main-sidebar-hide")
      )
        document.querySelector(".main-body").classList.add("main-sidebar-open");
    }*/
  }
  function Outhover() {
    /*if (document.querySelector(".main-body")) {
      document
        .querySelector(".main-body")
        .classList.remove("main-sidebar-open");
    }*/
  }

  return (
    <Fragment>
      <div className="sticky " style={{ marginBottom: "-64px" }}>
        <div className="main-menu main-sidebar main-sidebar-sticky side-menu">
          <div className="main-container-1 active main-sidebar-header">
            <Scrollbars
              options={{ removeTrackXWhenNotUsed: true }}
              className="hor-scroll"
              style={{ position: "absolute" }}
            >
              <div className="sidemenu-logo">
                <Link href={`/admin/dashboard`}>
                  <span className="main-logo">
                    <img
                      src={logolight.src}
                      className="header-brand-img desktop-logo"
                      alt={"logo1"}
                    />

                    <img
                      src={iconlight.src}
                      className="header-brand-img icon-logo"
                      alt={"logo-2"}
                    />

                    <img
                      src={logo.src}
                      className="header-brand-img desktop-logo theme-logo"
                      alt={"logo-3"}
                    />
                    <img
                      src={icon.src}
                      className="header-brand-img icon-logo theme-logo"
                      alt={"logo-4"}
                    />
                  </span>
                </Link>
              </div>
              <div
                className="main-body-1 main-sidebar-body"
                onMouseOver={() => Onhover()}
                onMouseOut={() => Outhover()}
              >
                <div className="slide-left " id="slide-left">
                  <i className="fe fe-chevron-left"></i>
                </div>

                <ul className="menu-nav nav" style={{ marginLeft: "0px" }}>
                  <MenuNav></MenuNav>
                </ul>
                <div className="slide-right" id="slide-right">
                  <i className="fe fe-chevron-right"></i>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
      <div className="jumps-prevent" style={{ paddingTop: "64px" }}></div>
    </Fragment>
  );
};

export default SideBar;
