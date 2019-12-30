import React, { Component } from "react";

class Items extends Component {
  state = {};

  handleRemove(item) {
    this.props.removeItem(item.currentTarget.innerText);
  }
  render() {
    var items = this.props.items.map((item, key) => {
      return (
        <div
          style={{
            boxShadow: "0px 2px 15px rgba(41, 47, 54, 0.1)",
            borderRadius: 5,
            height: 30,
            border: "1px solid",
            margin: 5,
            padding: 2,
            textAlign: "center",
            fontSize: 22
          }}
        >
          <div key={key} onClick={this.handleRemove.bind(this)}>
            {item}
          </div>
        </div>
      );
    });
    return <ul>{items}</ul>;
  }
}

export default Items;
