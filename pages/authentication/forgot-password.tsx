import { Row, Col, Card, Container, Form } from "react-bootstrap";
import Link from "next/link";
import AuthLayout from "../../components/layouts/AuthLayout";
import useTranslation from "next-translate/useTranslation";

//Images
import logolight from "../../public/images/brand/logo-light.png";
import logo from "../../public/images/brand/logo.png";
import BlockLoginLeft from "../../components/shared/ui/BlockLoginLeft";

export default function Register() {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <BlockLoginLeft
        title={t("login-complete:reset-your-password")}
        description={t("login-complete:signup-to-create")}
      ></BlockLoginLeft>
      <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
        <Container fluid>
          <Row className=" row-sm">
            <Card.Body className="card-body mt-2 mb-2">
              <img
                src={logo.src}
                className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                alt="logo"
              />
              <img
                src={logolight.src}
                className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                alt="logo"
              />
              <div className="clearfix"></div>
              <h5 className="text-start mb-2">
                {t("login-complete:forgot-password")}
              </h5>
              <p className="mb-4 text-muted tx-13 ms-0 text-start">
                {t("login-complete:description-register")}
              </p>
              <Form>
                <Form.Group className="text-start" controlId="from email">
                  <Form.Label>{t("login-complete:email")}</Form.Label>
                  <Form.Control
                    className="form-control"
                    placeholder={t("login-complete:enter-your-email")}
                    type="text"
                    defaultValue=""
                  />
                </Form.Group>
                <button className="btn ripple btn-main-primary btn-block mt-4">
                  {t("login-complete:request-reset-link")}
                </button>
              </Form>
              <div className="card-footer border-top-0 ps-0 mt-3 text-start ">
                <p>{t("login-complete:did-you-remembered-your-password")}</p>
                <p className="mb-0">
                  {t("login-complete:try-to")}
                  <Link href={`/authentication/login`}>
                    {t("login-complete:log-in")}
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Row>
        </Container>
      </Col>
    </AuthLayout>
  );
}
