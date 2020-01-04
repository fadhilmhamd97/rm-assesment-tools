import React, { Component, lazy } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  Table
} from 'reactstrap';
import { Radar, HorizontalBar } from "react-chartjs-2";

const DashboardComponent1 = lazy(() => import("./DashboardComponent/Dashboard1"));

const radar = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
};

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class Dashboard extends Component {
  render() {
    return (<div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Row>
                <Col sm="5">
                  <CardTitle className="mb-0"><h3>Dashboard Corporate Risk Maturity</h3></CardTitle>
                </Col>
              </Row>
              <DashboardComponent1></DashboardComponent1>
            </CardBody>
          </Card>

          <Row>
            <Col xs="12" sm="6">
              <Card>
                <CardBody>
                  <h3 style={{ textAlign: 'center' }}>Risk Maturity</h3>
                  <div className="chart-wrapper" style={{ height: 350 + 'px', marginTop: 35 + 'px' }}>
                    <Radar data={radar} height={140 + 'px'}></Radar>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6">
              <Card>
                <CardBody>
                  <h3 style={{ textAlign: 'center' }}>GRC Structure</h3>
                  <div className="chart-wrapper" style={{ height: 350 + 'px', marginTop: 35 + 'px' }}>
                    <Radar data={radar} height={140 + 'px'}></Radar>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="6">
              <Card>
                <CardBody>
                  <h3 style={{ textAlign: 'center' }}>Risk Maturity</h3>
                  <div className="chart-wrapper" style={{ height: 350 + 'px', marginTop: 35 + 'px' }}>
                    <Radar data={radar} height={140 + 'px'}></Radar>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6">
              <Card>
                <CardBody>
                  <h3 style={{ textAlign: 'center' }}>GRC Structure</h3>
                  <Row style={{ marginTop: 35 + 'px' }}>
                    <Col xs="12" sm="6">
                      <Table responsive bordered>
                        <tbody>
                          <tr>
                            <td style={{ textOrientation: 'upright', writingMode: 'sideways-lr', width: 3 + 'em' }} rowSpan="6">GRC Structure</td>
                          </tr>
                          <tr>
                            <td>Rise, Compliance, and Regulatory Oversight functions and Activities</td>
                          </tr>
                          <tr>
                            <td>Internal Audit Function and Activities</td>
                          </tr>
                          <tr>
                            <td>Business Continuity</td>
                          </tr>
                          <tr>
                            <td>Roles and Responsibility of Board and Executives</td>
                          </tr>
                          <tr>
                            <td>Inter-Functions Risk Management Initiatives</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col xs="12" sm="6">
                      <div className="chart-wrapper" style={{ height: 350 + 'px' }}>
                        <HorizontalBar data={bar} height={140 + 'px'}></HorizontalBar>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Card>
            <CardBody>
              <h3 style={{ textAlign: 'center' }}>GRC Structure: Roles and Responsibilities of Board and Executives</h3>
              <Row style={{ marginTop: 35 + 'px' }}>
                <Col xs="12" sm="6">
                  <div className="chart-wrapper" style={{ height: 350 + 'px' }}>
                    <HorizontalBar data={bar} height={140 + 'px'}></HorizontalBar>
                  </div>
                  <div className="chart-wrapper" style={{ height: 350 + 'px' }}>
                    <HorizontalBar data={bar} height={140 + 'px'}></HorizontalBar>
                  </div>
                </Col>
                <Col xs="12" sm="6">
                  <ul>
                    <li>The Board and other governing bodies lack transparency and visibility into the enterprise risk management practices</li>
                    <li>The Board and other governing bodies had limited transparency and visibility into the enterprise  risk management practices</li>
                    <li>The Board and other governing bodies request and receive periodic update into the enterprise risk management practices</li>
                    <li>The Board and other governing bodies receive regular update on the enterprise risk management practices</li>
                    <li>The Board and other governing bodies authorize the formation on the execute level risk committee, with a composition including representative from business units or departement</li>
                  </ul>

                  <ul style={{ marginTop: 12 + 'em' }}>
                    <li>The Board and other governing bodies lack transparency and visibility into the enterprise risk management practices</li>
                    <li>The Board and other governing bodies had limited transparency and visibility into the enterprise  risk management practices</li>
                    <li>The Board and other governing bodies request and receive periodic update into the enterprise risk management practices</li>
                    <li>The Board and other governing bodies receive regular update on the enterprise risk management practices</li>
                    <li>The Board and other governing bodies authorize the formation on the execute level risk committee, with a composition including representative from business units or departement</li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>)
  }
}

export default Dashboard;