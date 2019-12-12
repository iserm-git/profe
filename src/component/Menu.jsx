import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnclick(view) {
    switch (view) {
      case "Alumnos":
        //this.props.history.Push("/alumnos");

        break;
      case "Materias":
        //this.props.history.Push("/materias");
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Link to="/alumnos">
          <Button variant="contained" color="primary">
            Alumnos
          </Button>
        </Link>
        <Link to="/materias">
          <Button variant="contained" color="primary">
            Materias
          </Button>
        </Link>
      </Container>
    );
  }
}

export default Menu;
