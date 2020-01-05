import React, { useState } from 'react';
import 
{
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    Form,

    FormGroup,
    Label,
    Input,

} from 'reactstrap';

import { registerUser } from "../../../services/Auth/authService";


const AddUsers = props => {

    const [propsUser, actionUser] = useState({
        user_code: '',
        role_id: 1,
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const saveUser = () => {
        const dataEntity = {
            user_code: propsUser.user_code,
            role_id: parseInt(propsUser.role_id),
            name: propsUser.name,
            email: propsUser.email,
            username: propsUser.username,
            password: propsUser.password
        };

        console.info(dataEntity);

        registerUser(dataEntity).then(
          (result) => { 
            if(result.status === 201) {
                alert('Data succesfully added');
                actionUser({...propsUser,         
                        user_code: '',
                        role_id: '',
                        name: 'malik',
                        email: '',
                        username: '',
                        password: '' })
            } 
          },
          (error) => {
              alert('An Error occured, please try again')    
          }
        )
    }
    

    return(<div className="animated fadeIn">
        <Row className="mb-3">
          <Col>
            <span className="h4">Add User</span>
          </Col>
        </Row>

        <Row>
            <Col>
                <Card>
                <CardHeader>
                <h5>
                  Add User
                </h5>
              </CardHeader>
                    <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        <FormGroup row>
                            <Col md="4">
                            <Label htmlFor="user-code">User Code</Label>
                            </Col>
                            <Col md="8">
                            <Input value={propsUser.user_code} onChange={e => actionUser({...propsUser, user_code: e.target.value})} type="text" id="user-code" name="user-code" placeholder="User Code" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="4">
                            <Label htmlFor="role-id">Role Id</Label>
                            </Col>
                            <Col md="8">
                            <Input onChange={e => actionUser({...propsUser, role_id: e.currentTarget.value}) } type="select" name="role" id="role">
                                <option value="1">1</option>
                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="4">
                            <Label htmlFor="name">Name</Label>
                            </Col>
                            <Col md="8">
                            <Input value={propsUser.name} onChange={e => actionUser({...propsUser, name: e.target.value})} type="text" id="name" name="name" placeholder="Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="4">
                            <Label htmlFor="username">Username</Label>
                            </Col>
                            <Col md="8">
                            <Input value={propsUser.username} onChange={e => actionUser({...propsUser, username: e.target.value})} type="text" id="username" name="username" placeholder="Username" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="4">
                            <Label htmlFor="password">Password</Label>
                            </Col>
                            <Col md="8">
                            <Input type="password" value={propsUser.password} onChange={e => actionUser({...propsUser, password: e.target.value})} id="password" name="password" placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="4">
                            <Label htmlFor="email">Email</Label>
                            </Col>
                            <Col md="8">
                            <Input value={propsUser.email} onChange={e => actionUser({...propsUser, email: e.target.value})} type="text" id="email" name="email" placeholder="Email" />
                            </Col>
                        </FormGroup>
                        <Row className="pull-right">
                            <Button color="primary" style={{width: 40 + '%'}} onClick={saveUser} className="btn btn-lg" style={{marginRight: .5 + 'em'}}>Save</Button>
                        </Row>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>)
} 

export default AddUsers;