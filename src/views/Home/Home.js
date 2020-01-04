import React, { Component, lazy } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
} from 'reactstrap';

const Widget04 = lazy(() => import('../Widgets/Widget04'));


class Home extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3 text-center">
          <Col>
            <span className="h1">Hi, Aloysius</span>
          </Col>
        </Row>

        <Row className="mb-3 text-center">
          <Col className="mb-3">
            <span className="h2">What should we do today ?</span>
          </Col>
        </Row>

        <Row className="text-center justify-content-md-center">
          <Col sm="6" md="2">
            <Link style={{ textDecoration: 'none' }} to="/manual">
              <Widget04 icon="icon-map" color="primary" header="Find How To Use" value="30" invert>3 Document</Widget04>
            </Link>
          </Col>
          <Col sm="6" md="2">
            <Link style={{ textDecoration: 'none' }} to="/assesment">
              <Widget04 icon="icon-note" color="success" header="Start Assesment" value="20" invert>2 Assesment Type</Widget04>
            </Link>
          </Col>
          <Col sm="6" md="2">
            <Link style={{ textDecoration: 'none' }} to="/dashboard">
              <Widget04 icon="icon-chart" color="warning" header="Check Dashboard" value="40" invert>4 Dashboard Type</Widget04>
            </Link>
          </Col>
          <Col sm="6" md="2">
            <Link style={{ textDecoration: 'none' }} to="/settings">
              <Widget04 icon="icon-settings" color="danger" header="Set Up Assesment" value="30" invert>3 Setup Toolkit</Widget04>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
