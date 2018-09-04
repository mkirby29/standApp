import React, {Component} from 'react';

import Header from './header';
import NewsFeed from './news_feed';
import Footer from './footer';

import { formatPostData } from '../helpers';
import axios from 'axios';
import '../assets/css/login.css';
import GoogleComponent from './googleOATH';
import { GoogleLogout } from 'react-google-login';
import {Route} from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { logIn } from '../actions';
import Input from './input';

class Login extends Component {
    signIn = (values) => {
        this.props.logIn(values)
    }

    render () {
        const logout = () => {
            console.log('logout')
        }

        const { handleSubmit, authError } = this.props;
          
        return(
            <div className="login_div text-center">
              <p id="header_para" className="w3-animate-fading"><b>Stand</b><span id="card">App</span></p>
              <hr id="hr1" />
              <hr id="hr2" />
              <form onSubmit={handleSubmit(this.signIn)} className="row">
                <div className="login-form">
                    <label>Email</label>
                    <Field name="email" component={Input}/>
                    <label>Password</label>
                    <Field name="password" type="password" component={Input}/>
                    <div className="login-button-container align-items-start flex-column">
                        <div className="error-text text-danger">{authError}</div>
                        <button className="btn login-button"><strong>Log In</strong></button>
                    </div>
                </div>
                </form>
                 <div>
                    <Route path = '/login' component = {GoogleComponent} />
                </div>
                <div>
                <GoogleLogout
                    buttonText="Google Logout"
                    onLogoutSuccess={logout}
                />
                </div>

            </div>
        )
    }
}

function validate({ email, password }) {
    const errors ={};
    if(!email) {
        errors.email = 'Please enter your email address';
    }
    if(!password) {
        errors.password = 'Please enter your password'
    }
    return errors;
}

Login = reduxForm({
    form: '',
    validate: validate
})(Login)

function mapStateToProps(state) {
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, {
    logIn: logIn
})(Login);