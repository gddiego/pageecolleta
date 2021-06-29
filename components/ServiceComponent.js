import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
        <Row>
          <Col xs={12} md={4}>
            <img src="assets/unicLugar.svg" className="img-fluid service-img" />
            <h2>Mais Controle</h2>
            <p>
             Mais gerenciamento das informações das suas coletas
              e muita praticiade.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src="assets/undraw_map_1r69.svg" className="img-fluid service-img" />
            <h2>Geolocalização</h2>
            <p>
             Consegue visualizar a localização do local onde será feito a coleta.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img
            
              src="assets/undraw_About_us_page_re_2jfm.svg"
              className="img-fluid service-img"
            />
            <h2>Suporte</h2>
            <p>
              Suporte totalmente online, com agilidade e eficiencia.
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default ServiceComponent;
