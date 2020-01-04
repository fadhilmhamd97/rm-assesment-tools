import React, { useState, useEffect } from 'react';
import { getQuestionById } from "../../../../../services/Question/questionService";
import 
{ 
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    Form,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';
import AnswerDetail from './Answer/AnswerDetail';
const AnswerListComponent = React.lazy(() => import('./Answer/AnswerList'));
const ModalHelper = React.lazy(() => import('../../../../Shared/Modal'));
const AnswerCreate = React.lazy(() => import('./Answer/AnswerCreate'));


const QuestionDetailComponent = props => {

    let contextQuestionUrl = props.location.pathname.split('/');
    const id = contextQuestionUrl[contextQuestionUrl.length - 1];

    const [propsQuestionDetail, setQuestionDetail] = useState({
      question_code: '',
      indicator_id: ''
    })

    const [toggleCreateProps, toggleCreateAction] = useState({modal: false});
    const [toggleEditProps, toggleEditAction] = useState({modal: false});

    const [toggleModalDetail, setToggleModalDetail] = useState({
        id: '',
        action_type: ''
    })

    const toggleCreate = () => {
        toggleCreateAction({
            modal: !toggleCreateProps.modal
        })
    }

    const toggleEdit = () => {
        toggleEditAction({
            modal: !toggleEditProps.modal
        })
    }

  const editDetail = propsDetail => {
      setToggleModalDetail({
          ...toggleModalDetail,
          id: propsDetail,
          action_type: 'EDIT'
      })
      toggleEdit();
  }

    useEffect(
      () => {
              getQuestionById(id).then(
                  (result) => {
                      setQuestionDetail({...propsQuestionDetail,
                          question_code: result.data.question_code,
                          indicator_id: result.indicator_id
                      });
                  },
                  (error) =>{

                  }
              )
      }, [])

    return(
        <div className="animated fadeIn">
        
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row>
                    <Col sm="6" style={{textAlign: "left"}}>
                        <h5>
                            List Answer of  {propsQuestionDetail.question_code}
                        </h5>
                    </Col>
                    <Col sm="6" style={{textAlign: "right"}}>
                        <Button color="primary" className="btn btn-sm" onClick={toggleCreate}>Add New Answer</Button>
                    </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <AnswerListComponent editDetailPanel={editDetail} contextId={id}></AnswerListComponent>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <ModalHelper modalTitle="Add New Answer" toggleModal={toggleCreate} modalState={toggleCreateProps.modal} sizeModal="md">
            <AnswerCreate></AnswerCreate>
        </ModalHelper>

        <ModalHelper stateModel modalTitle={"Edit Answer - "+toggleModalDetail.id}  toggleModal={toggleEdit} modalState={toggleEditProps.modal} sizeModal="md">
            <AnswerDetail id={toggleModalDetail.id} mode={toggleModalDetail.action_type}></AnswerDetail>
        </ModalHelper>

    </div>)
}

export default QuestionDetailComponent;