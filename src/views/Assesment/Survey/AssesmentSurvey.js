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

//Lazy Load
const ModalHelper = React.lazy(() => import('../../Shared/Modal'))
const SurveyDetailDocumentComponent = React.lazy(() => import('./Component/SurveyDetailDocumentComponent'))

class AssesmentSurvey extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">Survey</span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h5>
                  List Survey Document
                  <Link style={{ textDecoration: 'none' }} to="/assesment/survey/detail">
                    <Button className="float-right" size="sm" color="danger">
                      <i className="fa fa-plus"></i> New Assessment Survey
                  </Button>
                  </Link>
                    <Button className="float-right mr-3" onClick={this.toggle.bind(this)} size="sm" color="success">
                      <i className="fa fa-plus"></i> New Document Survey
                  </Button>
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
                      <td>Survey Risk Maturity Q3 2019</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/survey/document/question/1">
                          <Button size="sm" color="primary">
                            <i className="fa fa-question"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning" onClick={this.toggle.bind(this)}>
                          <i className="fa fa-pencil"></i>
                        </Button>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/survey/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> Survey Result
                        </Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Survey Risk Maturity Q4 2019</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/survey/document/question/1">
                          <Button size="sm" color="primary">
                            <i className="fa fa-question"></i>
                          </Button>
                        </Link>
                        <Button className="ml-2" size="sm" color="warning" onClick={this.toggle.bind(this)}>
                          <i className="fa fa-pencil"></i>
                        </Button>
                        <Link style={{ textDecoration: 'none' }} to="/assesment/survey/result">
                          <Button className="ml-2" size="sm" color="danger">
                            <i className="fa fa-book"></i> Survey Result
                      </Button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ModalHelper modalTitle="Add New Answer" toggleModal={this.toggle.bind(this)} modalState={this.state.modal} sizeModal="md">
            <SurveyDetailDocumentComponent></SurveyDetailDocumentComponent>
        </ModalHelper>
      </div>
    );
  }
}

export default AssesmentSurvey;
