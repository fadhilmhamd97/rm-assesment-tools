import React, { useEffect, useState } from "react";
import 
{
    Row,
    Col,
    FormGroup,
    Label,
    Button,
    Form,
    Input
} from "reactstrap";
import { getIndicatorById, updateIndicator } from "../../../../../services/Indicator/indicatorService";

const IndicatorDetailComponent = props => {
    
    const [propsIndicator, setIndicator] = useState({
        indicator: "",
        indicator_code: ""
    });

    useEffect(
        () => {
                getIndicatorById(props.id).then(
                    (result) => {
                        setIndicator({...propsIndicator,
                            indicator: result.data.indicator,
                            indicator_code: result.indicator_code
                        });
                    },
                    (error) =>{

                    }
                )
        }, [])
  
      const saveIndicator = () => {
          const dataEntity = {
              id: props.id,
              indicator: propsIndicator.indicator,
              indicator_code: propsIndicator.indicator_code
          };
  
          updateIndicator(dataEntity).then(
            (result) => { 
              if(result.status === 201) {
                  setIndicator({...propsIndicator, indicator: ''})
              } 
            },
            (error) => {
                alert('An Error occured, please try again')    
            }
          )
      }

        return(<div className="indicator-create">
        <Row>
            <Col>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col md="4">
                    <Label htmlFor="name">Nama Indikator</Label>
                  </Col>
                  <Col md="8">
                    <Input value={propsIndicator.indicator || ''} onChange={e => setIndicator({...propsIndicator, indicator: e.target.value})} type="text" id="name" name="name" placeholder="Nama Indikator" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <Label htmlFor="parent">Parent</Label>
                  </Col>
                  <Col md="8">
                    <Input value={propsIndicator.indicator_code} onChange={e => setIndicator({...propsIndicator, indicator_code: e.currentTarget.value}) } type="select" name="parent" id="parent">
                      <option value="P0001">P0001</option>
                      <option value="P0001">P0002</option>
                      <option value="P0001">P0003</option>
                    </Input>
                  </Col>
                </FormGroup>
                <Row className="pull-right">
                  <Button disabled={props.mode === 'SHOW' ? true : false} color="primary" onClick={saveIndicator} className="btn btn-md" style={{marginRight: .5 + 'em'}}>Save</Button>
                </Row>
              </Form>
          </Col>
      </Row>
  </div>);
}

export default IndicatorDetailComponent;