import React from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
//import { api_login } from "../../../apis/users"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      login: false,
      store: null
    };
  }

  handleValidSubmit = async (event, username, password) => {
    event.preventDefault();


   /*  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(username, password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3300/users/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error)); */

         
         console.log("body", username, password)
        const response = await fetch("http://localhost:3300/users/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify(username, password),
         
       })
       const result = await response.json();
 
       console.log(result)
       
       localStorage.setItem('login', JSON.stringify({
             login: true,
             token: result.access_token
           }))


  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ username: values.username, error: true });
    console.log(`Login failed`);
  };

  render() {
    return (
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
        <AvField
          name="username"
          label="Email"
          type="text"
          validate={{
            required: true,
            email: true
          }}
        />
        <AvField
          name="password"
          label="Password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your password"
            },
            pattern: {
              value: "^[A-Za-z0-9]+$",
              errorMessage:
                "Your password must be composed only with letter and numbers"
            },
            minLength: {
              value: 6,
              errorMessage: "Your password must be between 6 and 16 characters"
            },
            maxLength: {
              value: 16,
              errorMessage: "Your password must be between 6 and 16 characters"
            }
          }}
        />
        <Button id="submit">Submit</Button>
      </AvForm>
    );
  }
}

export default LoginForm;
