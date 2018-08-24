import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';

 
const responseGoogle = (response) => {
    console.log(response);
  }

class Google extends Component{
    constructor(props){
        super(props)
    }
    render(){
 
return(
    <div className = 'row center'>
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="LOGIN WITH GOOGLE"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
  </div>
);
    }
}

export default Google;