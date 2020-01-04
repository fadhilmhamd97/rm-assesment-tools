import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { LoginService } from "../../services/Auth/authService";

class Login extends Component {

  constructor(){
    super();

    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();

    this.state = {
      isAuthenticated: false
    }
  }

  //On Change Delegator
  onInputDelegator = (event, areaFlag) => {
    areaFlag === 'username' ? this.usernameInput.current.value = event.target.value : this.passwordInput.current.value = event.target.value;
  }

  Login = () => {
    LoginService(this.usernameInput.current.value, this.passwordInput.current.value).then(
      (result) => {this.props.history.push('/dashboard')}, 
      (error) => { this.setState({isAuthenticated: !this.state.isAuthenticated}) }
    );

  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h2>Login</h2>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={(event, areaFlag = "username") => this.onInputDelegator(event,areaFlag)} ref={this.usernameInput} type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={(event, areaFlag = "password") => this.onInputDelegator(event, areaFlag)} ref={this.passwordInput} type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <p hidden={this.state.isAuthenticated ? false : true} style={{marginTop: -1 +'em', color: 'red'}}>*Username or Password is incorrect</p> 
                      <Row>
                        <Col xs="6">
                            <Button onClick={this.Login.bind(this)} color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h1>Risk Maturity Assesment Tools</h1>
                      <p>Risk Maturity Assesment Tools is Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
