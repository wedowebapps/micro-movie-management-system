import React from "react";
import { Row, Alert } from "reactstrap";

const Alerts = (props) => {
  return (
    <Row>
      <Alert color="danger">{props.note}</Alert>
    </Row>
  );
};

export default Alerts;
