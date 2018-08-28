import React from 'react';
import createReactClass from 'create-react-class';
import Facebook from 'react-oauth2';

let FacebookComponent = createReactClass({
  getInitialState: function () {
    return {
      "data": {
        "id": "", "name": "", "email": "", "gender": "", "location": { "id": "", "name": "" }
      }
    };
  },

  facebook: function (err, res) {
    if (!err) {
      this.setState({ data: res.profile })
    } else {
      this.setState({ data: 'something happen wrong' })
    }
  },

  render: function () {
    return <div>
      <Facebook url={'http://localhost:3000/'}
        clientId={'232665067386248'}
        clientSecret={'2009c8a8b67c81ba890f316931eb6478'}
        redirectUri={'http://localhost:3000/'}
        authorizationUrl={'https://www.facebook.com/v2.5/dialog/oauth'}
        scope={'email,user_location'}
        width={300}
        height={300}
        callback={this.facebook}
        style={{ color: 'green' }}
      >
        Login With Facebook
  </Facebook>
      <hr />
      {JSON.stringify(this.state)}
    </div>
  }
});

export default FacebookComponent;