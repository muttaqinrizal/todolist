import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Logo from "./logo.png";
class SplashScreen extends Component {
  state = {
    redirect: false
  };

  directing = () => {
    this.setState({
      redirect: true
    });
  };
  componentDidMount() {
    setTimeout(
      function() {
        this.directing();
      }.bind(this),
      3000
    );
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/home"} />;
    }
    return (
      <React.Fragment>
        <Container
          maxWidth="xs"
          style={{
            padding: 0,
            background:
              "linear-gradient(28.71deg, #FF6B6B 0%, #FFE66D 222.83%)",
            height: "100vh",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <img style={{ width: 100 }} src={Logo}></img>
            <Typography>Todolist Apps</Typography>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default SplashScreen;
