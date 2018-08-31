import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import { Google } from 'react-oauth2';


class GoogleComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      "data": {
      "id": "", "name": "", "email": "", "gender": "", "location": { "id": "", "name": "" }
    },
    loggedin: false
    }
  }

  google = (err, res) =>{
    if (!err) {
      this.setState({ data: res.profile })
    } else {
      this.setState({ data: 'something happen wrong' })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state === prevState ) {
      return;
    } else {
        this.props.history.push("/avatar_select");
        this.setState({loggedin: true})
    }
  }


  render () {
    return <div className = "text-center">
      <Google
        url={'http://localhost:3000'}
        clientId={'575268215328-e3kffueqpfhho3m57b4quq8dbe907g7r.apps.googleusercontent.com'}
        clientSecret={'fW2w15epMMo5IqMTqdJGENMK'}
        redirectUri={'http://localhost:3000'}
        scope={['https://www.googleapis.com/auth/userinfo.email']}
        width={300}
        height={300}
        callback={this.google}
        style={{    display: 'inline-block',
        background: '#d14836',
        color: '#fff',
        width: 190,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 2,
        border: '1px solid transparent',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto',

      }}
      >
        Login With Google
  </Google>
      <hr />
      {JSON.stringify(this.state)}
    </div>
  }
};
export default GoogleComponent;