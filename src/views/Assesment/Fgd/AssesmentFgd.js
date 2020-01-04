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

class AssesmentFgd extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">FGD / Interview</span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h5>
                  List FGD / Interview Document
                  <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/detail">
                    <Button className="float-right" size="sm" color="danger">
                      <i className="fa fa-plus"></i> New Assessment FGD / Interview
                  </Button>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/detail">
                    <Button className="float-right mr-3" size="sm" color="success">
                      <i className="fa fa-plus"></i> New Document FGD / Interview
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
                      <td>FGD - Health and Safety - 20191011</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/detail">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                        {/*
                        <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> FGD / Interview Result
                        </Button>
                        </Link>
                        */}
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>FGD - Construction Department - 20191015</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/detail">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                        {/*
                        <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> FGD / Interview Result
                        </Button>
                        </Link>
                        */}
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>FGD - Board Directors - 20191020</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/detail">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                        {/*
                        <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> FGD / Interview Result
                        </Button>
                        </Link>
                        */}
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Interview - Risk Management Team - 20191005</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/detail">
                          <Button size="sm" color="primary">
                            <i className="fa fa-search"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                        {/*
                        <Link style={{ textDecoration: 'none' }} to="/assesment/fgd/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> FGD / Interview Result
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

export default AssesmentFgd;
