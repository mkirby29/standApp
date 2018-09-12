import React, { Component } from 'react';
import { connect } from 'react-redux'

export default function (WrappedComponent, path ='/login') {
    class Auth extends Component {
        componentDidMount () {
            this.checkAuth();
        }

        componentDidUpdate () {
            this.checkAuth();
        }

        checkAuth () {
            console.log('check auth: ', this.props);
            const {auth, history} = this.props;
            let token = localStorage.getItem('token');
            console.log(token)
            if(!token || token === 'undefined') {
                history.push(path);
            }
        }

        render () {
            return <WrappedComponent {...this.props}/>
        }
    }
    function mapStateToProps (state) {
        return {
            auth: state.user.error,
            user: state.user
        }
    }
    
    return connect(mapStateToProps)(Auth);
}