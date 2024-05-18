import Link from "next/link";
import React from "react";
import { Dropdown, Nav } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";

import spanishflag from "../../../../public/images/flags/pe.svg";
import englishflag from "../../../../public/images/flags/us.svg";
import users1 from "../../../../public/images/users/alaskkag.jpeg";

type LanguageWithArray = {
  name: string;
  image: string;
  active: boolean;
};
export default function HeadDropDown() {
  const { t } = useTranslation();

  const language = [
    {
      name: t("common:spanish"),
      image: spanishflag.src,
      active: true,
    },
    {
      name: t("common:english"),
      image: englishflag.src,
      active: false,
    },
  ];

  const Darkmode = () => {
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div className="d-flex order-lg-2 align-items-center ms-auto">
      <Dropdown className="dropdown d-flex main-header-theme">
        <Nav.Link
          className="nav-link icon layout-setting"
          onClick={() => Darkmode()}
        >
          <span className="dark-layout">
            <i className="fe fe-sun header-icons"></i>
          </span>
          <span className="light-layout">
            <i className="fe fe-moon header-icons"></i>
          </span>
        </Nav.Link>
      </Dropdown>
      <Dropdown className=" main-header-notification flag-dropdown">
        <Dropdown.Toggle
          className="nav-link icon country-Flag "
          variant="default"
        >
          {language.map((item, i) =>
            item.active ? <img src={item.image} alt="img" key={i} /> : null
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu" style={{ margin: "0px" }}>
          {language.map((item, i) => (
            <Dropdown.Item
              key={i}
              className={`d-flex ${item.active ? "active" : ""}`}
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img src={item.image} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">{item.name}</span>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {/* <Dropdown className=" main-header-notification">
        <Dropdown.Toggle className="nav-link icon" href="#" variant="default">
          <i className="fe fe-bell header-icons"></i>
          <span className="badge bg-danger nav-link-badge">4</span>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ margin: 0 }}>
          <div className="header-navheading">
            <p className="main-notification-text">
              Tienes 1 notificación sin leer
              <span className="badge bg-pill bg-primary ms-3">Ver todo</span>
            </p>
          </div>
          <div className="main-notification-list">
            {[1, 2, 3].map((item, index) => (
              <div className="media new">
                <div className="main-img-user online">
                  <img alt="avatar" src={users5.src} />
                </div>
                <div className="media-body">
                  <p>
                    Congratulate <strong>Olivia James</strong> for New template
                    start
                  </p>
                  <span>Oct 15 12:32pm</span>
                </div>
              </div>
            ))}
          </div>
          <div className="dropdown-footer">
            <Link href="#">Ver todas las notificaciones</Link>
          </div>
        </Dropdown.Menu>
      </Dropdown> */}
      <Dropdown className="main-profile-menu">
        <Dropdown.Toggle className="d-flex p-0" variant="default">
          <span className="main-img-user mx-1">
            <img alt="avatar" src={users1.src} />
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ margin: "0px" }}>
          <div className="header-navheading">
            <h6 className="main-notification-title">Taylor Swift</h6>
          </div>

          <Dropdown.Item className="border-top">
            <Link href={`/components/pages/profile/`}>
              <>
                <i className="fe fe-user"></i> {t("nav:item-profile")}
              </>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={`/components/pages/profile/`}>
              <i className="fe fe-edit"></i> Edit Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={`/components/authentication/signin/`}>
              <i className="fe fe-power"></i> {t("nav:item-log-out")}
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
