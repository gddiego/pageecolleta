import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/undraw_connected_world_wuay.svg" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>Venha fazer parte da revolução</h2>
              <b>Plataforma totalmente web, que irá te auxiliar na organização das suas informações de coleta.</b>
              <br />
              <br />
              <p>
                A E-colleta surgiu com a necessidade de agilizar os processos de coleta, contando com
                organização das informações de coleta, parceria entre o empreendimento e os coletadores em geral, venha, faça parte da evolução.
              </p>
              <button className="btn btn-custom">Teste Gratis 1 MêS</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
