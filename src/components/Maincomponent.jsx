import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import './Main.css';
import spotify from '../images/image 2.png'

function Main() {
    return (<div className="body d-flex">
        <div className="Box d-flex p-4">
            <div style={{flex:"1"}}>
                <h2>Welcome back</h2>
                <p>We're so exited to sleep again</p>
                <Form className="text-start">
                    <FormGroup>
                        <Label for="EMAIL OR PHONE NUMBER">EMAIL OR PHONE NUMBER</Label>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="PASSWORD">PASSWORD</Label>
                        <Input type="password" />
                    </FormGroup>
                    <a href="#">Forget your password</a><br></br>
                    <Button className="my-3" color="primary" block>Login</Button>
                    <p>need an account?  <a href="#">register</a></p>
                </Form>
            </div>
            <div style={{flex:"1"}} className="align-self-center px-1">
                <img className="mw-100" src={spotify} alt="spotyfy" />
                <h5>Unable to login?</h5>
                <p>Listen to some music, relax yourself, and take a deep breath until you can remember your password.</p>
            </div>
        </div>
    </div>
    );
}
export default Main;