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

const DetailDocumentComponent = React.lazy(() => import('./Component/SurveyDetailDocumentComponent'))
const DetailQuestionDocumentComponent = React.lazy(() => import('./Component/SurveyQuestionDocumentComponent'));

class AssesmentSurveyDetailDocument extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">Assement Document Question - S001</span>
          </Col>
        </Row>

        <Row>
          <Col>
          <CardHeader>
                <h5>
                  List Question
                </h5>
              </CardHeader>
            <Card>
              <CardBody>
                  <DetailQuestionDocumentComponent></DetailQuestionDocumentComponent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AssesmentSurveyDetailDocument;
