import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  Nav,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import Multiselect from "react-select";
import DataTable, { TableColumn } from "react-data-table-component";
const DataTableExtensions = dynamic(
  () => import("react-data-table-component-extensions"),
  { ssr: false }
);

import "react-data-table-component-extensions/dist/index.css";

type TableDataColumns = {
  Id: string;
  Title: string;
  Year: string;
  Genres: string;
  Statusinfo: string;
  ACTIONS: string;
};
type TableHeaderColumn = {
  name: string;
  selector: string;
  sortable: boolean;
  cell?: any;
};
type DataWithTable = {
  columns: TableHeaderColumn;
  data: TableDataColumns;
};

enum TypePerson {
  "natural" = "Natural",
  "juridica" = "Juridica",
}
export default function ExportCSV() {
  const [modalClaims, setModalClaims] = useState(false);
  const [typeDocument, setTypeDocument] = useState([]);
  const [typePersonElement, setTypePersonElement] = useState(
    TypePerson.natural
  );
  const typePerson = [
    { value: TypePerson.natural, label: TypePerson.natural },
    { value: TypePerson.juridica, label: TypePerson.juridica },
  ];
  const objDocument = [
    { value: "1", label: "Dni", type: TypePerson.natural },
    { value: "2", label: "Ruc", type: TypePerson.juridica },
    { value: "2", label: "Carné de Extranjería", type: TypePerson.natural },
  ];
  useEffect(() => {
    setTypeDocument(
      objDocument.filter((obj) => {
        return obj.type === typePersonElement;
      })
    );
  }, [typePersonElement]);

  const handlerTypePerson = (e: any) => {
    console.log("e => ", e.value);
    setTypePersonElement(e.value);
  };

  const data: TableDataColumns[] = [...Array(100)].map((item, index) => ({
    IdClaim: "R191525170001bu",
    Name: "Taylor Alison Swift",
    ClaimDate: "2022-11-04",
    ContractedService: "PRODUCTO",
    Campus: "Los Angeles",
    Status: "RESPONDIDO",
    StatusInfo: "success",
    DaysLeft: "23 Días",
    ResponseDate: "2022-11-04",
  }));

  const handlerShowModal = () => {
    setModalClaims(true);
  };
  const handlerHiddenModal = () => {
    setModalClaims(false);
  };

  const columns: TableColumn<TableHeaderColumn>[] = [
    {
      name: "Código Reclamo",
      selector: (row) => [row.IdClaim],
      sortable: true,
      cell: (row) => <div className="font-weight-semibold">{row.IdClaim}</div>,
    },
    {
      name: "Nombre Consumidor",
      selector: (row) => [row.Name],
      sortable: false,
    },
    {
      name: "Fec. de Reclamo",
      selector: (row) => [row.ClaimDate],
      sortable: false,
    },
    {
      name: "Servicio",
      selector: (row) => [row.ContractedService],
      sortable: false,
    },
    {
      name: "Sede",
      selector: (row) => [row.Campus],
      sortable: false,
    },
    {
      name: "Estado",
      selector: (row) => [row.Status],
      sortable: false,
      cell: (row) => (
        <div>
          <span className={`status bg-${row.StatusInfo}`}></span>
          {row.Status}
        </div>
      ),
    },
    {
      name: "Quedan",
      selector: (row) => [row.DaysLeft],
      sortable: false,
    },
    {
      name: "Fecha Rpta.",
      selector: (row) => [row.ResponseDate],
      sortable: false,
    },
    {
      name: "Opción",
      selector: (row) => [row.ACTIONS],
      sortable: false,
      cell: (row) => (
        <div className="button-list">
          <OverlayTrigger
            placement={row.ACTIONS}
            overlay={<Tooltip>Responder</Tooltip>}
          >
            <i className="ti ti-files btn" onClick={handlerShowModal}></i>
          </OverlayTrigger>
          <OverlayTrigger
            placement={row.ACTIONS}
            overlay={<Tooltip> Ver</Tooltip>}
          >
            <i className="ti ti-eye btn"></i>
          </OverlayTrigger>
        </div>
      ),
    },
  ];

  const tableDatas = {
    columns,
    data,
  };

  return (
    <>
      <DataTableExtensions {...tableDatas}>
        <DataTable
          columns={columns}
          defaultSortAsc={false}
          // striped={true}
          pagination
        />
      </DataTableExtensions>
      <Modal show={modalClaims} size="xl" backdrop="static">
        <Modal.Header closeButton onClick={handlerHiddenModal}>
          <Modal.Title>Reclamos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Modal.Title>Modal Body</Modal.Title> */}
          <h6 className="main-content-label mb-3">
            IDENTIFICACION DEL USUARIO
          </h6>
          <Row className="row-sm">
            <Col md={12}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Tipo de persona</p>
                <Multiselect
                  defaultValue={typePerson[0]}
                  options={typePerson}
                  singleSelect
                  displayValue="key"
                  onChange={handlerTypePerson}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-sm">
            {typePersonElement == TypePerson.natural ? (
              <Col md={4}>
                <Form.Group className="form-group">
                  <p className="mg-b-10">Nombre y Apellido:</p>
                  <Form.Control type="text" name="example-text-input" />
                </Form.Group>
              </Col>
            ) : (
              <Col md={4}>
                <Form.Group className="form-group">
                  <p className="mg-b-10">Razón Social:</p>
                  <Form.Control type="text" name="example-text-input" />
                </Form.Group>
              </Col>
            )}

            <Col md={4}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Tipo documento:</p>
                <Multiselect
                  options={typeDocument}
                  singleSelect
                  displayValue="key"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Número de documento:</p>
                <Form.Control type="text" name="example-text-input" />
              </Form.Group>
            </Col>
          </Row>

          <h6 className="main-content-label mb-3">DATOS ADICIONALES</h6>
          <Row className="row-sm">
            <Col md={12}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Dirección:</p>
                <Form.Control type="text" name="example-text-input" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Correo:</p>
                <Form.Control type="text" name="example-text-input" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Teléfono:</p>
                <Form.Control type="text" name="example-text-input" />
              </Form.Group>
            </Col>
          </Row>

          <h6 className="main-content-label mb-3">
            IDENTIFICACIÓN DEL BIEN CONTRATADO
          </h6>
          <Row className="row-sm">
            <Col md={4}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Producto / Servicio:</p>
                <Multiselect
                  options={typeDocument}
                  singleSelect
                  displayValue="key"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Descripción / Asunto:</p>
                <Form.Control type="text" name="example-text-input" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Monto reclamado:</p>
                <Form.Control type="text" name="example-text-input" />
              </Form.Group>
            </Col>
          </Row>

          <h6 className="main-content-label mb-3">
            DETALLE DE RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR
          </h6>
          <Row className="row-sm">
            <Col md={12}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Producto / Servicio:</p>
                <textarea className="form-control mg-t-20" rows={3}></textarea>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="form-group">
                <p className="mg-b-10">Descripción / Asunto:</p>
                <textarea className="form-control mg-t-20" rows={3}></textarea>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlerHiddenModal}>
            Responder
          </Button>
          <Button variant="secondary" onClick={handlerHiddenModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
