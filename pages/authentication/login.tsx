import {
  Button,
  Col,
  Form,
  Row,
  Alert,
  Container,
  Card,
} from "react-bootstrap";
import Link from "next/link";
import AuthLayout from "../../components/layouts/AuthLayout";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { useRouter } from "next/router";

//Images
import logolight from "../../public/images/brand/logo-light.png";
import logo from "../../public/images/brand/logo.png";
import BlockLoginLeft from "../../components/shared/ui/BlockLoginLeft";

export default function Login() {
  const { t } = useTranslation();
  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "taylorswift@gmail.com",
    password: "1234567890",
  });
  const { email, password } = data;
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  let navigate = useRouter();
  const routeChange = () => {
    let path = `/admin/dashboard/`;
    navigate.push(path);
  };

  const Login = (e: any) => {
    console.log(data);
    if (
      data.email == "taylorswift@gmail.com" &&
      data.password == "1234567890"
    ) {
      routeChange();
    } else {
      setError("Los datos proporcionados no son correctos");
      setData({
        email: "taylorswift@gmail.com",
        password: "1234567890",
      });
    }
  };

  return (
    <AuthLayout>
      <BlockLoginLeft
        title={t("login-complete:create-your-account")}
        description={t("login-complete:signup-to-create")}
      ></BlockLoginLeft>
      <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
        <Container fluid>
          <Row className="row-sm">
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
              {err && <Alert variant="danger">{err}</Alert>}
              <Form>
                <h5 className="text-start mb-2">{t("login-complete:title")}</h5>
                <p className="mb-4 text-muted tx-13 ms-0 text-start">
                  {t("login-complete:description")}
                </p>
                <Form.Group
                  className="text-start form-group"
                  controlId="formEmail"
                >
                  <Form.Label>{t("login-complete:email")}</Form.Label>
                  <Form.Control
                    placeholder={t("login-complete:enter-your-email")}
                    className="form-control"
                    name="email"
                    type="text"
                    value={email}
                    onChange={changeHandler}
                    required
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
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={changeHandler}
                    required
                  />
                </Form.Group>
                <Button
                  onClick={Login}
                  className="btn ripple btn-main-primary btn-block mt-2"
                >
                  {t("login-complete:log-in")}
                </Button>
              </Form>
              <div className="text-start mt-5 ms-0">
                <div className="mb-1">
                  <Link href={`/authentication/forgot-password/`}>
                    {t("login-complete:forgot-password")}
                  </Link>
                </div>
                <div>
                  {t("login-complete:dont-have-account")}
                  <Link href={`/authentication/register`}>
                    {t("login-complete:register-here")}
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Row>
        </Container>
      </Col>
    </AuthLayout>
  );
}
