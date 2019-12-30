import React, { Component } from "react";

class AddForm extends Component {
  state = {};
  handleSubmit(e) {
    e.preventDefault();
    var val = this.refs.listItem.value;
    val && this.props.addItem(val);
    this.refs.listItem.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          style={{ height: 30, margin: 30 }}
          type="text"
          ref="listItem"
          placeholder="Schedule...."
        ></input>
        <input style={{ height: 30 }} type="submit" value="Add"></input>
      </form>
    );
  }
}

export default AddForm;
