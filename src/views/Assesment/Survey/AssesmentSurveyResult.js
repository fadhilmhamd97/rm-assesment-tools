import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Table,
  Badge,
  Button,
} from 'reactstrap';

const ModalHelper = React.lazy(() => import('../../Shared/Modal'))
const SurveyResultDetailComponent = React.lazy(() => import('./Component/SurveyResultDetailComponent'))

class AssesmentSurveyResult extends Component {
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
            <span className="h4">Survey Result</span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                List Survey Result - Survey Risk Maturity Q3 2019
              </CardHeader>
              <CardBody>
                <Table hover striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Timestamp</th>
                      <th>Name</th>
                      <th>Division</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2</td>
                      <td>2019-12-23 16:16:00</td>
                      <td>Zayn</td>
                      <td>Operation</td>                      
                      <td>
                        <span>
                          <Button color="primary" className="btn btn-sm" onClick={this.toggle.bind(this)}>
                            <i className="fa fa-search"></i>
                          </Button>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2019-12-23 16:16:00</td>
                      <td>Hasan</td>
                      <td>Finance</td>                      
                      <td>
                        <span>
                          <Button color="primary" className="btn btn-sm" onClick={this.toggle.bind(this)}>
                            <i className="fa fa-search"></i>
                          </Button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <ModalHelper modalTitle="Add New Answer" toggleModal={this.toggle.bind(this)} modalState={this.state.modal} sizeModal="md">
            <SurveyResultDetailComponent></SurveyResultDetailComponent>
        </ModalHelper>
      </div>
    );
  }
}

export default AssesmentSurveyResult;
