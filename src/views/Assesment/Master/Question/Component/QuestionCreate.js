import React, { useState } from 'react';
import 
{
    Col,
    Row,
    FormGroup,
    Label,
    Input,
    Button,
    Form
} from "reactstrap";
import { insertQuestion } from "../../../../../services/Question/questionService";

const QuestionCreateComponent = props => {

    const [indicatorProps, setIndicator] = useState({
      question_code: "",
      indicator_id: "",
      question: ""
    });

    const saveQuestion = () => {
        const dataEntity = {
            question_code: indicatorProps.question_code,
            indicator_id: indicatorProps.indicator_id,
            question: indicatorProps.question
        };

        insertQuestion(dataEntity).then(
          (result) => { 
            if(result.status === 201) {
                alert('Data succesfully added');
                setIndicator({...indicatorProps, question: '', question_code: '', indicator_id: ''})
            } 
          },
          (error) => {
              alert('An Error occured, please try again')    
          }
        )
    }

    return(<div className="animated fadeIn">
        <Row>
            <Col>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="indicator-id">Indicator ID</Label>
                    </Col>
                    <Col md="8">
                      <Input value={indicatorProps.indicator_id} onChange={e => setIndicator({...indicatorProps, indicator_id: e.target.value})} type="text" id="indicator-id" name="indicator-id" placeholder="Nama Indikator" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="question-code">Question Code</Label>
                    </Col>
                    <Col md="8">
                      <Input onChange={e => setIndicator({...indicatorProps, question_code: e.currentTarget.value}) } type="text" name="question-code" id="question-code">
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="question-code">Question</Label>
                    </Col>
                    <Col md="8">
                      <Input onChange={e => setIndicator({...indicatorProps, question: e.currentTarget.value}) } type="text" name="question" id="question">
                      </Input>
                    </Col>
                  </FormGroup>
                  <Row className="pull-right">
                    <Button color="primary" onClick={saveQuestion} className="btn btn-md" style={{marginRight: .5 + 'em'}}>Save</Button>
                  </Row>
                </Form>
            </Col>
        </Row>
    </div>);
}

export default QuestionCreateComponent;