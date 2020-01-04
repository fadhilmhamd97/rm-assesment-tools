import React from 'react';
import 
{
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

const SurveyDetailDocumentComponent = props => {
    return(<div className="animated fadeIn">
        <Row>
          <Col>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Survey Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Survey Name" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Survey Quartal</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Survey Quartal" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Survey Year</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Survey Year" />
                    </Col>
                  </FormGroup>
                  <Row className="pull-right">
                      <Button style={{marginRight: .5 + 'em', marginTop: 1 + 'em'}} color="success" className="btn btn-md">Save Survey</Button>
                  </Row>
                </Form>
          </Col>
        </Row>
    </div>)
}

export default SurveyDetailDocumentComponent;