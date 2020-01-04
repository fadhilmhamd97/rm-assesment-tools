import React, { useState, useEffect } from 'react';
import 
{
    Form,
    FormGroup,
    Col,
    Label,
    Input,
    Row,
    Button
} from "reactstrap";
import { insertAnswer } from "../../../../../../services/Answer/answerService";

const AnswerCreateComponent = props => {

    const [propsAnswer, setAnswer] = useState({
        question_id: '',
        question_answer: '',
        bobot: ''
    });

    useEffect(
        () => {

        }, [])
  
      const saveAnswer = () => {
          const dataEntity = {
              question_id: propsAnswer.question_id,
              question_answer: propsAnswer.question_answer,
              bobot: propsAnswer.bobot
          };
  
          insertAnswer(dataEntity).then(
            (result) => { 
              if(result.status === 201) {
                  alert('Data succesfully added');
                  setAnswer({...propsAnswer, question_id: '', question_answer: '', bobot: '' })
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
                  <Label htmlFor="question-id">Question ID</Label>
                </Col>
                <Col md="8">
                  <Input value={propsAnswer.question_id} onChange={e => setAnswer({...propsAnswer, question_id: e.target.value})} type="text" id="qcode" name="question-code" placeholder="Question Code" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">
                  <Label htmlFor="question-answer">Question Answer</Label>
                </Col>
                <Col md="8">
                    <Input value={propsAnswer.question_answer} onChange={e => setAnswer({...propsAnswer, question_answer: e.target.value})} type="text" id="qanswer" name="question-answer" placeholder="Question Answer" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">
                  <Label htmlFor="score">Score</Label>
                </Col>
                <Col md="8">
                  <Input onChange={e => setAnswer({...propsAnswer, bobot: e.currentTarget.value}) } type="text" name="score" id="score">
                  </Input>
                </Col>
              </FormGroup>
              <Row className="pull-right">
                <Button color="primary" onClick={saveAnswer} className="btn btn-md" style={{marginRight: .5 + 'em'}}>Save</Button>
              </Row>
            </Form>
        </Col>
    </Row>
</div>);
}

export default AnswerCreateComponent;