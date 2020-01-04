import React, { useState } from 'react';
import 
{ 
    Row, 
    Col,
    Card,
    CardBody,
    CardHeader,
    Button, 
} from 'reactstrap';

const QuestionListComponent = React.lazy(() => import('./Component/QuestionList'));
const ModalHelper = React.lazy(() => import('../../../Shared/Modal'));
const CreateQuestionComponent = React.lazy(() => import('./Component/QuestionCreate'));


export const QuestionComponent = props => {

    const [toggleCreateProps, toggleCreateAction] = useState({modal: false});

    const toggleCreate = () => {
        toggleCreateAction({
            modal: !toggleCreateProps.modal
        })
    }

        return(<div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                        <Row>
                        <Col sm="6" style={{textAlign: "left"}}>
                            <h5>
                                List Questions
                            </h5>
                        </Col>
                        <Col sm="6" style={{textAlign: "right"}}>
                            <Button color="primary" className="btn btn-sm" onClick={toggleCreate}>Add New Question</Button>
                        </Col>
                        </Row>
                        </CardHeader>
                        <CardBody>
                            <QuestionListComponent></QuestionListComponent>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        <ModalHelper stateModel modalTitle="Add New Question" toggleModal={toggleCreate} modalState={toggleCreateProps.modal} sizeModal="md">
            <CreateQuestionComponent></CreateQuestionComponent>
        </ModalHelper>
    </div>)

}

export default QuestionComponent;