import React from "react";
import { Col } from "react-bootstrap";

//Images
import logolight from "../../../public/images/brand/logo-light.png";
import user from "../../../public/images/svg/user.svg";
type PropsWithComponent = {
  title: string;
  description: string;
};

export default function BlockLoginLeft({
  title,
  description,
}: PropsWithComponent) {
  return (
    <Col
      lg={6}
      xl={5}
      className="d-none d-lg-block text-center bg-primary details"
    >
      <div className="mt-5 pt-4 p-2 pos-absolute">
        <img
          src={logolight.src}
          className="header-brand-img mb-4"
          alt="logo-light"
        />
        <div className="clearfix"></div>
        <img src={user.src} className="ht-100 mb-0" alt="user" />
        <h5 className="mt-4 text-white">{title}</h5>
        <span className="tx-white-6 tx-13 mb-5 mt-xl-0">{description}</span>
      </div>
    </Col>
  );
}
