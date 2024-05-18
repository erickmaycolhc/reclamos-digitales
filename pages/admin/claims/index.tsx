import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import AdminLayout from "../../../components/layouts/AdminLayout";
import ExportCSV from "../../../components/shared/data/table/dataTables";
import PageHeader from "../../../components/shared/layout-component/page-header/page-header";

export default function Claims() {
  const { t } = useTranslation();

  return (
    <AdminLayout>
      <PageHeader
        title={t("common:my-claims")}
        item="Dashboard"
        active_item={t("common:my-claims")}
      />
      <Row className="row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            {/* <Card.Header className=" border-bottom-0 pb-0">
              <div>
                <div className="d-flex">
                  <label className="main-content-label my-auto pt-2">
                    All Orders
                  </label>
                </div>
              </div>
            </Card.Header> */}
            <Card.Body>
              <Row className="table-filter">
                <Col lg={3}>{t("common:my-claims")}</Col>
                <Col lg={9} className="d-lg-flex">
                  <div className="d-flex ms-auto mt-4 me-4 mt-lg-0"></div>
                  <div className="d-flex mt-4 mt-lg-0">
                    <div className="filter-group"></div>
                  </div>
                </Col>
              </Row>

              <div className="table-responsive">
                <ExportCSV />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
}
