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
        title={t("login-complete:create-your-account")}
        description={t("login-complete:signup-to-create")}
      ></BlockLoginLeft>
      <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
        <Container fluid>
          <Row className=" row-sm">
            <Card.Body className="mt-2 mb-2">
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
                {t("login-complete:signup-for-free")}
              </h5>
              <p className="mb-4 text-muted tx-13 ms-0 text-start">
                {t("login-complete:description-register")}
              </p>
              <Form>
                <Form.Group
                  className="text-start form-group"
                  controlId="fromName"
                >
                  <Form.Label>{t("login-complete:name")}</Form.Label>
                  <Form.Control
                    placeholder={t("login-complete:enter-your-name")}
                    type="text"
                  />
                </Form.Group>
                <Form.Group
                  className="text-start form-group"
                  controlId="formEmail"
                >
                  <Form.Label>{t("login-complete:email")}</Form.Label>
                  <Form.Control
                    placeholder={t("login-complete:enter-your-email")}
                    type="email"
                  />
                </Form.Group>
                <Form.Group
                  className="text-start form-group"
                  controlId="formpassword"
                >
                  <Form.Label>{t("login-complete:password")}</Form.Label>
                  <Form.Control
                    placeholder={t("login-complete:enter-your-password")}
                    type="password"
                  />
                </Form.Group>

                <button className="btn ripple btn-main-primary btn-block mt-2">
                  {t("login-complete:create-account")}
                </button>
              </Form>
              <div className="text-start mt-5 ms-0">
                <p className="mb-0">
                  {t("login-complete:already-have-account")}
                  <Link href={`/authentication/login/`}>
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
