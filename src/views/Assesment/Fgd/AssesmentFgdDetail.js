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
  Form,
  Fade,
  Collapse,
  Badge,
} from 'reactstrap';

class AssesmentFgdDetail extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">New Assesment FGD / Interview</span>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="8">
            <Card className="card-accent-primary">
              <CardHeader>
                <h5>
                  FGD - Health and Safety - 20191011
                  <Button style={{ width: '20%' }} className="float-right" size="md" color="primary">
                    <i className="fa fa-save"></i> Save
                  </Button>
                </h5>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="select">Group</Label>
                    </Col>
                    <Col md="4">
                      <Input type="select" name="select" id="select">
                        <option value="0">Health and Safety</option>
                        <option value="1">Construction Department</option>
                        <option value="2">Board of Directors</option>
                        <option value="3">Risk Management Team</option>
                      </Input>
                    </Col>
                    <Col md="2">
                      <Label htmlFor="text-input">Accessor</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="text-input" name="text-input" placeholder="Accessor" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="text-input">Participant</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="text-input" name="text-input" placeholder="Name 1" />
                    </Col>
                    <Col md="2">
                      <Label htmlFor="text-input">Reviewer</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="text-input" name="text-input" placeholder="Reviewer" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="text-input">&nbsp;</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="text-input" name="text-input" placeholder="Name 2" />
                    </Col>
                    <Col md="2">
                      <Label htmlFor="text-input">Location</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="text-input" name="text-input" placeholder="Location" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="text-input">&nbsp;</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="text-input" name="text-input" placeholder="Name 3" />
                    </Col>
                    <Col md="2">
                      <Label htmlFor="text-input">Date</Label>
                    </Col>
                    <Col md="4">
                      <Input type="date" id="text-input" name="text-input" placeholder="Date" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className="card-accent-success">
                <CardHeader>
                  <h5>
                    Risk Strategy
                    <div className="card-header-actions">
                      {/*eslint-disable-next-line*/}
                      <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    </div>
                  </h5>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="1">
                          <h5>
                            <Badge className="mr-1" color="secondary" pill>1</Badge>
                          </h5>
                        </Col>
                        <Col md="3">
                          <Label htmlFor="text-input">How is the mechanism and frequency of monitoring reporting to detect significant variations in exposure on a timely basis ?</Label>
                        </Col>
                        <Col md="3">
                          <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                            placeholder="Insert answer here" />
                        </Col>
                        <Col md="2">
                          <Input type="select" rows="4" name="select" id="select">
                            <option value="0">- Score -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>
                        </Col>
                        <Col md="3">
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Priority Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Additional Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Less Priority Aspiration" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className="card-accent-success">
                <CardHeader>
                  <h5>
                    Risk Appetite
                    <div className="card-header-actions">
                      {/*eslint-disable-next-line*/}
                      <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    </div>
                  </h5>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample1">
                  <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="1">
                          <h5>
                            <Badge className="mr-1" color="secondary" pill>1</Badge>
                          </h5>
                        </Col>
                        <Col md="3">
                          <Label htmlFor="text-input">How is the mechanism and frequency of monitoring reporting to detect significant variations in exposure on a timely basis ?</Label>
                        </Col>
                        <Col md="3">
                          <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                            placeholder="Insert answer here" />
                        </Col>
                        <Col md="2">
                          <Input type="select" rows="4" name="select" id="select">
                            <option value="0">- Score -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>
                        </Col>
                        <Col md="3">
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Priority Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Additional Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Less Priority Aspiration" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className="card-accent-success">
                <CardHeader>
                  <h5>
                    Risk Profile
                    <div className="card-header-actions">
                      {/*eslint-disable-next-line*/}
                      <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    </div>
                  </h5>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="1">
                          <h5>
                            <Badge className="mr-1" color="secondary" pill>1</Badge>
                          </h5>
                        </Col>
                        <Col md="3">
                          <Label htmlFor="text-input">How is the mechanism and frequency of monitoring reporting to detect significant variations in exposure on a timely basis ?</Label>
                        </Col>
                        <Col md="3">
                          <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                            placeholder="Insert answer here" />
                        </Col>
                        <Col md="2">
                          <Input type="select" rows="4" name="select" id="select">
                            <option value="0">- Score -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>
                        </Col>
                        <Col md="3">
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Priority Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Additional Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Less Priority Aspiration" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className="card-accent-danger">
                <CardHeader>
                  <h5>
                    GRC Structure
                    <div className="card-header-actions">
                      {/*eslint-disable-next-line*/}
                      <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    </div>
                  </h5>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="1">
                          <h5>
                            <Badge className="mr-1" color="secondary" pill>1</Badge>
                          </h5>
                        </Col>
                        <Col md="3">
                          <Label htmlFor="text-input">How is the mechanism and frequency of monitoring reporting to detect significant variations in exposure on a timely basis ?</Label>
                        </Col>
                        <Col md="3">
                          <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                            placeholder="Insert answer here" />
                        </Col>
                        <Col md="2">
                          <Input type="select" rows="4" name="select" id="select">
                            <option value="0">- Score -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>
                        </Col>
                        <Col md="3">
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Priority Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Additional Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Less Priority Aspiration" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className="card-accent-danger">
                <CardHeader>
                  <h5>
                    GRC Polices
                    <div className="card-header-actions">
                      {/*eslint-disable-next-line*/}
                      <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    </div>
                  </h5>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="1">
                          <h5>
                            <Badge className="mr-1" color="secondary" pill>1</Badge>
                          </h5>
                        </Col>
                        <Col md="3">
                          <Label htmlFor="text-input">How is the mechanism and frequency of monitoring reporting to detect significant variations in exposure on a timely basis ?</Label>
                        </Col>
                        <Col md="3">
                          <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                            placeholder="Insert answer here" />
                        </Col>
                        <Col md="2">
                          <Input type="select" rows="4" name="select" id="select">
                            <option value="0">- Score -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>
                        </Col>
                        <Col md="3">
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Priority Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Additional Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Less Priority Aspiration" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className="card-accent-danger">
                <CardHeader>
                  <h5>
                    Monitoring &Reporting
                    <div className="card-header-actions">
                      {/*eslint-disable-next-line*/}
                      <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    </div>
                  </h5>
                </CardHeader>
                <Collapse isOpen={true} id="collapseExample">
                  <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="1">
                          <h5>
                            <Badge className="mr-1" color="secondary" pill>1</Badge>
                          </h5>
                        </Col>
                        <Col md="3">
                          <Label htmlFor="text-input">How is the mechanism and frequency of monitoring reporting to detect significant variations in exposure on a timely basis ?</Label>
                        </Col>
                        <Col md="3">
                          <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                            placeholder="Insert answer here" />
                        </Col>
                        <Col md="2">
                          <Input type="select" rows="4" name="select" id="select">
                            <option value="0">- Score -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>
                        </Col>
                        <Col md="3">
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Priority Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Additional Aspiration" />
                          <Input className="mb-1" type="text" id="text-input" name="text-input" placeholder="Insert Less Priority Aspiration" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>

      </div>
    );
  }
}

export default AssesmentFgdDetail;
