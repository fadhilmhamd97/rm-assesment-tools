import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Manual extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">User Manual</span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                List User Manual
              </CardHeader>
              <CardBody>
                <Table hover striped responsive size="md">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Document</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>How to use Risk Maturity Assesment Tools</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/manual/how-to-use">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="danger">
                          <i className="fa fa-print"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Risk Management Maturity Parameter</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/manual/how-to-use">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="danger">
                          <i className="fa fa-print"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Risk Management Maturity Level Target</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/manual/how-to-use">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="danger">
                          <i className="fa fa-print"></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Manual;
