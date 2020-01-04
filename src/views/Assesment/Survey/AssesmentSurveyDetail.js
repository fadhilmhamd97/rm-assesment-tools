import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  Form,
} from 'reactstrap';

class AssesmentSurveyDetail extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">New Assesment Survey</span>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="8">
            <Card className="card-accent-primary">
              <CardHeader>
                <h5>
                  Survey Risk Maturity Q3 2019
                  <Button style={{ width: '20%' }} className="float-right" size="md" color="primary">
                    <i className="fa fa-save"></i> Save
                  </Button>
                </h5>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Name" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Position</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Director</option>
                        <option value="1">Department Head</option>
                        <option value="2">Division Head</option>
                        <option value="3">Staff</option>
                      </Input>
                      <FormText color="muted">If there's no option, fill the textbox bellow</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">&nbsp;</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input2" name="text-input" placeholder="Other Position" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="8">
            <Card className="card-accent-danger">
              <CardHeader>
                1. Role of the Board, Trancparancy and Visibility of the board in ERM practices
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <FormGroup check className="radio mb-1">
                        <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                        <Label check className="form-check-label" htmlFor="radio1">
                          The Board and Other Governing Bodies lack transparancy and visibility into the ERM Practices
                        </Label>
                      </FormGroup>
                      <FormGroup check className="radio mb-1">
                        <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                        <Label check className="form-check-label" htmlFor="radio2">
                          The Board and Other Governing Bodies have limited transparancy and visibility into the ERM Practices
                        </Label>
                      </FormGroup>
                      <FormGroup check className="radio mb-1">
                        <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                        <Label check className="form-check-label" htmlFor="radio3">
                          The Board and Other Governing Bodies request and receive periodic updates on the ERM Practices
                        </Label>
                      </FormGroup>
                      <FormGroup check className="radio mb-1">
                        <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                        <Label check className="form-check-label" htmlFor="radio4">
                          The Board and Other Governing Bodies receive regular updates on the ERM Practices
                        </Label>
                      </FormGroup>
                      <FormGroup check className="radio mb-1">
                        <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option4" />
                        <Label check className="form-check-label" htmlFor="radio5">
                          The Board and Other Governing Bodies Authorize the formation of an Executive Risk Committee, with a composition
                      </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default AssesmentSurveyDetail;
