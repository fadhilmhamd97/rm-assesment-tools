import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

class AssesmentObservasiReviewDetail extends Component {
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
            <span className="h4">New Assesment Observasi & Review</span>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="8">
            <Card className="card-accent-primary">
              <CardHeader>
                <h5>
                  Penilaian Observasi & Review Dokumen - Q3 2019
                  <Button style={{ width: '20%' }} className="float-right" size="md" color="primary">
                    <i className="fa fa-save"></i> Save
                  </Button>
                </h5>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="select">Team</Label>
                    </Col>
                    <Col md="8">
                      <Input type="select" name="select" id="select">
                        <option value="0">Team 1</option>
                        <option value="1">Team 2</option>
                        <option value="2">Team 3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">Accessor</Label>
                    </Col>
                    <Col md="8">
                      <Input type="text" id="text-input" name="text-input" placeholder="Accessor 1" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">&nbsp;</Label>
                    </Col>
                    <Col md="8">
                      <Input type="text" id="text-input" name="text-input" placeholder="Accessor 2" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="select">Period</Label>
                    </Col>
                    <Col md="8">
                      <Input type="select" name="select" id="select">
                        <option value="0">Q1 - 2019</option>
                        <option value="1">Q2 - 2019</option>
                        <option value="2">Q3 - 2019</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">Date</Label>
                    </Col>
                    <Col md="8">
                      <Input type="date" id="text-input" name="text-input" placeholder="Date" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Table hover striped responsive size="md">
                  <thead>
                    <tr>
                      <th style={{ width: '5%' }}>No</th>
                      <th style={{ width: '5%' }}>Indicator</th>
                      <th style={{ width: '30%' }}>Sub Indicator</th>
                      <th style={{ width: '30%' }}>Assesment Statment</th>
                      <th style={{ width: '10%' }}>Score</th>
                      <th style={{ width: '20%' }}>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><Badge color="success" pill>Risk Strategy</Badge></td>
                      <td>1.1. Risk & Strategy Alignment</td>
                      <td></td>
                      <td>
                        <Input type="select" name="select" id="select">
                          <option value="0">-</option>
                          <option value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                          <option value="2">4</option>
                          <option value="2">5</option>
                        </Input>
                      </td>
                      <td>
                        <Button className="ml-2 mt-1" onClick={this.toggle} size="sm" color="primary">
                          <i className="fa fa-check-square-o"></i> Checking Pointers
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><Badge color="success" pill>Risk Strategy</Badge></td>
                      <td>1.2. Board Risk Oversight</td>
                      <td></td>
                      <td>
                        <Input type="select" name="select" id="select">
                          <option value="0">-</option>
                          <option value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                          <option value="2">4</option>
                          <option value="2">5</option>
                        </Input>
                      </td>
                      <td>
                        <Button className="ml-2 mt-1" onClick={this.toggle} size="sm" color="primary">
                          <i className="fa fa-check-square-o"></i> Checking Pointers
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><Badge color="danger" pill>GRC Structure</Badge></td>
                      <td>4.1. Risk Compliance, and Regulatory Oversight Functions and Activities</td>
                      <td>
                      </td>
                      <td>
                        <Input type="select" name="select" id="select">
                          <option value="0">-</option>
                          <option value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                          <option value="2">4</option>
                          <option value="2">5</option>
                        </Input>
                      </td>
                      <td>
                        <Button className="ml-2 mt-1" onClick={this.toggle} size="sm" color="primary">
                          <i className="fa fa-check-square-o"></i> Checking Pointers
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><Badge color="danger" pill>GRC Structure</Badge></td>
                      <td>
                        4.4 Roles and Responsibilites of Board and Executives
                      </td>
                      <td>
                        4.4.1 Role of the board in transparency and visibility into ERM Practice
                      </td>
                      <td>
                        <Input type="select" name="select" id="select">
                          <option value="0">-</option>
                          <option value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                          <option value="2">4</option>
                          <option value="2">5</option>
                        </Input>
                      </td>
                      <td>
                        <Button className="ml-2 mt-1" onClick={this.toggle} size="sm" color="primary">
                          <i className="fa fa-check-square-o"></i> Checking Pointers
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><Badge color="danger" pill>GRC Structure</Badge></td>
                      <td>
                        4.4 Roles and Responsibilites of Board and Executives
                      </td>
                      <td>
                        4.4.2 Senior executives constituting the executive risk commite gather, analyze, aggregate, communicate and report to the Board on the enterprise's risk management process
                      </td>
                      <td>
                        <Input type="select" name="select" id="select">
                          <option value="0">-</option>
                          <option value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                          <option value="2">4</option>
                          <option value="2">5</option>
                        </Input>
                      </td>
                      <td>
                        <Button className="ml-2 mt-1" onClick={this.toggle} size="sm" color="primary">
                          <i className="fa fa-check-square-o"></i> Checking Pointers
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="xl">
          <ModalHeader toggle={this.toggle}>
            Checking Pointers - <Badge color="danger" pill>GRC Structure</Badge> Assesment 4.4.2
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <Table hover striped responsive size="md">
                  <thead>
                    <tr>
                      <th style={{ width: '5%' }}>No</th>
                      <th style={{ width: '30%' }}>Checking Pointers</th>
                      <th style={{ width: '30%' }}>Document Name</th>
                      <th style={{ width: '10%' }}>Page</th>
                      <th style={{ width: '10%' }}>Last Updated</th>
                      <th style={{ width: '15%' }}>Justification</th>
                      <th style={{ width: '25%' }}>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Struktur manajemen resiko telah melibatkan BOD</td>
                      <td>Struktur Organisasi Job Description</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <Button className="mt-1" size="sm" color="primary">
                          <i className="fa fa-save"></i>
                        </Button>
                        <Button className="mt-1" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        Laporan kegiatan BOD menunjukan secara lengkap keterlibatan BOD dalam mengelola risiko perusahaan
                      </td>
                      <td>Laporan kegiatan BOD</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <Button className="mt-1" size="sm" color="primary">
                          <i className="fa fa-save"></i>
                        </Button>
                        <Button className="mt-1" size="sm" color="warning">
                          <i className="fa fa-pencil"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Input type="text" id="text-input" name="text-input" placeholder="Checking Pointers" />
                      </td>
                      <td>
                        <Input type="text" id="text-input" name="text-input" placeholder="Document Name" />
                      </td>
                      <td>
                        <Input type="text" id="text-input" name="text-input" placeholder="Page" />
                      </td>
                      <td>
                        <Input type="text" id="text-input" name="text-input" placeholder="Last Updated" />
                      </td>
                      <td>
                        <Input type="text" id="text-input" name="text-input" placeholder="Justification" />
                      </td>
                      <td>
                        <Button className="mt-1" size="sm" color="primary">
                          <i className="fa fa-save"></i>
                        </Button>
                        <Button className="mt-1" size="sm" color="danger">
                          <i className="fa fa-times"></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={'6'}></td>
                      <td>
                        <Button className="mt-1" size="sm" color="success">
                          <i className="fa fa-plus"></i>
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </Col>
            </Row>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AssesmentObservasiReviewDetail;
