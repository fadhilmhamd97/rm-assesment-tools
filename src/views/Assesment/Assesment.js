import React, { Component, lazy } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Widget04 = lazy(() => import('../Widgets/Widget04'));

class Assesment extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3 text-center">
          <Col>
            <span className="h1">&nbsp;</span>
          </Col>
        </Row>

        <Row className="mb-3 text-center">
          <Col className="mb-3">
            <span className="h2">Which Assesment should we do today ?</span>
          </Col>
        </Row>

        <Row className="text-center justify-content-md-center">
          <Col sm="6" md="3">
            <Link style={{ textDecoration: 'none' }} to="/assesment/survey">
              <Widget04 icon="icon-map" color="primary" header="Survey" value="20" invert>2 Document</Widget04>
            </Link>
          </Col>
          <Col sm="6" md="3">
            <Link style={{ textDecoration: 'none' }} to="/assesment/fgd">
              <Widget04 icon="icon-people" color="success" header="FGD / Interview" value="20" invert>2 Document Type</Widget04>
            </Link>
          </Col>
          <Col sm="6" md="3">
            <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review">
              <Widget04 icon="icon-check" color="warning" header="Observasi & Review" value="40" invert>4 Document Type</Widget04>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Assesment;
