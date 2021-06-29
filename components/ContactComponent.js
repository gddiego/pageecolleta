import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactComponent() {
  return (
    <div className="contact-container-bg">
      <Container className="contact-component">
        <Row>
          <Col xs={12} md={6}>
            <h1>E-colleta</h1>
            <p>
             Software para agilizar a coleta de residuos de condominios, uma parceria entre o estabelecimento que efetua a coleta e o empreendimento.
            </p>
            <div>
              <span className="fa fa-facebook-square"></span>
              <span className="fa fa-instagram"></span>
              <span className="fa fa-linkedin-square"></span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <b>Links</b>
            <br />
            <br />
            <h6>Overview</h6>
            <h6>Midia Social</h6>
            <h6>Contato</h6>
          </Col>
          <Col xs={12} md={3}>
            <b>Empresa</b>
            <br />
            <br />
            <h6>Overview</h6>
            <h6>Midia social</h6>
            <h6>Contato</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactComponent;
