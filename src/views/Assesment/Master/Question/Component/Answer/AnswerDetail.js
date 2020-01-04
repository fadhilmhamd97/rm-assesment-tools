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
import { getAnswerById, updateAnswer } from "../../../../../../services/Answer/answerService";

const AnswerDetailComponent = props => {

    const [propsAnswer, setAnswer] = useState({
        question_id: '',
        question_answer: '',
        bobot: ''
    });

    useEffect(
        () => {
            getAnswerById(props.id).then(
                    (result) => {
                        setAnswer({...propsAnswer,
                            question_code: result.data.question_id,
                            question_answer: result.data.question_answer,
                            bobot: result.data.bobot
                        });
                        console.info(propsAnswer);
                    },
                    (error) =>{

                    }
                )
        }, [])
  
      const editAnswer = () => {
          const dataEntity = {
              id: props.id,
              question_code: propsAnswer.question_code,
              question_answer: propsAnswer.question_answer,
              bobot: propsAnswer.bobot
          };
  
          updateAnswer(dataEntity).then(
            (result) => { 
              if(result.status === 201) {
                  setAnswer({...propsAnswer, question_code: '', question_answer: '', bobot: '' })
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
                  <Input value={propsAnswer.question_code || ''} onChange={e => setAnswer({...propsAnswer, question_code: e.target.value})} type="text" id="qcode" name="question-code" placeholder="Question Code" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">
                  <Label htmlFor="indicator-id">Question Answer</Label>
                </Col>
                <Col md="8">
                    <Input value={propsAnswer.question_answer || ''} onChange={e => setAnswer({...propsAnswer, question_answer: e.target.value})} type="text" id="qanswer" name="question-answer" placeholder="Question Answer" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">
                  <Label htmlFor="score">Score</Label>
                </Col>
                <Col md="8">
                  <Input value={propsAnswer.bobot || ''} onChange={e => setAnswer({...propsAnswer, bobot: e.currentTarget.value}) } type="number" name="score" id="score">
                  </Input>
                </Col>
              </FormGroup>
              <Row className="pull-right">
                <Button color="primary" onClick={editAnswer} className="btn btn-md" style={{marginRight: .5 + 'em'}}>Save</Button>
              </Row>
            </Form>
        </Col>
    </Row>
</div>);
}

export default AnswerDetailComponent;