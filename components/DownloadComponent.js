import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function DownloadComponent() {
  return (
    <div className="download-container-bg">
      <Container className="download-component">
        <h3>Experimente Gratis por 1 mês</h3>
        <h3>Conheça a plataforma</h3>
        <p>
         Faça o simples, alcance novos horizontes, venha com a E-coleta
        </p>
        <Container className="img-download">
   
          <img
            src="assets/undraw_lightbulb_moment_re_ulyo.svg"
            className="img-fluid"
          />
        </Container>
      </Container>
    </div>
  );
}

export default DownloadComponent;
