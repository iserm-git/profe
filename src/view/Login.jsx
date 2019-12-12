import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, TextField } from "@material-ui/core";

// import {
//   MenuIcon,
//   SearchIcon,
//   AccountCircle,
//   MailIcon,
//   NotificationsIcon,
//   MoreIcon
// } from "@material-ui/icons";

class Login extends Component {
  state = {
    hardcodedUser: {
      user: "iserm",
      password: "123"
    },
    usuario: "",
    password: ""
  };

  handleInputUser = event => {
    const usuario = event.target.value;
    this.setState({ usuario: usuario });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Container maxWidth="sm">
        <form>
          <TextField
            id="user"
            label="Usuario"
            onChange={evento => this.handleInputUser(evento)}
            value={this.state.usuario}
          />
          <br />
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            value={this.state.password}
          />
          <br />
          <br />

          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Iniciar sesion
          </Button>
        </form>
      </Container>
    );
  }
}

export default Login;
