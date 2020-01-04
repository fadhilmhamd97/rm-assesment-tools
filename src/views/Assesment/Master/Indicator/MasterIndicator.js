import React, { useState, useRef } from 'react';
import 
{
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button
} from 'reactstrap'


//Lazy sub Component
const IndicatorLists = React.lazy(() => import('./Component/IndicatorList'));
const ModalHelper = React.lazy(() => import('../../../Shared/Modal'));
const CreateComponent = React.lazy(() => import('./Component/IndicatorCreate'));
const DetailComponent = React.lazy(() => import('./Component/IndicatorDetail'));

const IndicatorComponent = props => {

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

    const showDetail = propsDetail => {
        setToggleModalDetail({
            ...toggleModalDetail,
            id: propsDetail,
            action_type: 'SHOW'
        });
        toggleEdit();
    }

    const editDetail = propsDetail => {
        setToggleModalDetail({
            ...toggleModalDetail,
            id: propsDetail,
            action_type: 'EDIT'
        })
        toggleEdit();
    }

    return(<div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">Indicator</span>
          </Col>
        </Row>

        <Row>
            <Col>
                <Card>
                <CardHeader>
                <h5>
                  Master Indicator
                  <Button color="primary" className="float-right" size="sm" onClick={toggleCreate}>
                    Add New Indicator
                  </Button>
                </h5>
              </CardHeader>
                    <CardBody>
                        <IndicatorLists showDetailPanel={showDetail} editDetailPanel={editDetail}></IndicatorLists>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <ModalHelper stateModel modalTitle="Add New Indicator" toggleModal={toggleCreate} modalState={toggleCreateProps.modal} sizeModal="md">
            <CreateComponent></CreateComponent>
        </ModalHelper>

        <ModalHelper stateModel modalTitle="Edit Indicator" toggleModal={toggleEdit} modalState={toggleEditProps.modal} sizeModal="md">
            <DetailComponent id={toggleModalDetail.id} mode={toggleModalDetail.action_type}></DetailComponent>
        </ModalHelper>
    </div>)
} 

export default IndicatorComponent;