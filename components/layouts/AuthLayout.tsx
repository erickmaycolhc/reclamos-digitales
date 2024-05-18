import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

//Images
import logolight from "../../public/images/brand/logo-light.png";
import user from "../../public/images/svg/user.svg";
import logo from "../../public/images/brand/logo.png";

type AuthLayoutProps = {
  children: React.ReactNode;
};
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="page main-signin-wrapper">
      <Row className="signpages text-center">
        <Col md={12}>
          <Card>
            <Row className="row-sm">{children}</Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
