import React, { useRef, useState } from 'react';
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
import { insertIndicator } from "../../../../../services/Indicator/indicatorService";


const IndicatorCreateComponent = props => {

    const [indicatorProps, setIndicator] = useState({
      indicator: "",
      indicator_code: ""
    });

    const indicator_code = useRef();
    const indicator = useRef();

    const saveIndicator = () => {
        const dataEntity = {
            indicator: indicatorProps.indicator,
            indicator_code: indicatorProps.indicator_code
        };

        insertIndicator(dataEntity).then(
          (result) => { 
            if(result.status === 201) {
              alert('Data succesfully added');
                setIndicator({...indicatorProps, indicator: ''})
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
                      <Label htmlFor="name">Nama Indikator</Label>
                    </Col>
                    <Col md="8">
                      <Input value={indicatorProps.indicator} onChange={e => setIndicator({...indicatorProps, indicator: e.target.value})} ref={indicator} type="text" id="name" name="name" placeholder="Nama Indikator" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="parent">Parent</Label>
                    </Col>
                    <Col md="8">
                      <Input onChange={e => setIndicator({...indicatorProps, indicator_code: e.currentTarget.value}) } ref={indicator_code} type="select" name="parent" id="parent">
                        <option value="P0001">P0001</option>
                        <option value="P0001">P0002</option>
                        <option value="P0001">P0003</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <Row className="pull-right">
                    <Button color="primary" onClick={saveIndicator} className="btn btn-md" style={{marginRight: .5 + 'em'}}>Save</Button>
                  </Row>
                </Form>
            </Col>
        </Row>
    </div>);
}

export default IndicatorCreateComponent;