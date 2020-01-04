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

class AssesmentObservasiReview extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">Penilaian Observasi & Review Dokumen</span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h5>
                  List Observasi & Review Dokumen
                  <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/detail">
                    <Button className="float-right" size="sm" color="danger">
                      <i className="fa fa-plus"></i> New Assessment Observasi & Review
                  </Button>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/detail">
                    <Button className="float-right mr-3" size="sm" color="success">
                      <i className="fa fa-plus"></i> New Document Observasi & Review
                  </Button>
                  </Link>
                </h5>
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
                      <td>Penilaian Observasi & Document Review - Q3 2019 - Team 1</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/detail">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                        {/*
                        <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> Observasi & Review Result
                        </Button>
                        </Link>
                        */}
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Penilaian Observasi & Document Review - Q3 2019 - Team 2</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/detail">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                        {/*
                        <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> Observasi & Review Result
                        </Button>
                        </Link>
                        */}
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Penilaian Observasi & Document Review - Q4 2019 - Team 1</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/detail">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                        {/*
                        <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> Observasi & Review Result
                        </Button>
                        </Link>
                        */}
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Penilaian Observasi & Document Review - Q4 2019 - Team 2</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/detail">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                        {/*
                        <Link style={{ textDecoration: 'none' }} to="/assesment/observasi-review/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> Observasi & Review Result
                        </Button>
                        </Link>
                        */}
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

export default AssesmentObservasiReview;
