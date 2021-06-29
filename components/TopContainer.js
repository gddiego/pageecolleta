import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TopContainer() {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left">
              <img className="img-fluid" src="/assets/undraw_data_processing_yrrv.svg" />
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              
              <h6>Plataforma</h6>
              <h2>Conheça</h2>
              <h1>E-colleta</h1>
              <p>
                venha conectar seu residencial ou condominio a agilidade de coleta
                conheça nosso sistema, Teste grátis durante 1 mês.
              </p>
              <button className="btn btn-custom">Teste Gratis</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopContainer;
