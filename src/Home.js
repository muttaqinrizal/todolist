import React, { Component } from "react";
import AddForm from "./Form";
import Items from "./Items";
import { Container } from "@material-ui/core";

class Home extends Component {
  state = {
    items: []
  };

  addItem(value) {
    this.setState({
      items: this.state.items.concat(value)
    });
  }

  removeItem(value) {
    const Filtered = this.state.items.filter(item => {
      return item !== value;
    });
    this.setState({
      items: Filtered
    });
  }

  componentWillMount() {
    var ItemList = localStorage.getItem("items");
    if (ItemList) {
      this.setState({
        items: JSON.parse(localStorage.getItem("items"))
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }
  render() {
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
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <AddForm addItem={this.addItem.bind(this)} />
            <Items
              items={this.state.items}
              removeItem={this.removeItem.bind(this)}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
