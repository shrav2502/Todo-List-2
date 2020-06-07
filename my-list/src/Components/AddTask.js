import React from "react";

class AddTask extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.newItem.value == "") {
      alert("enter valid input");
    } else {
      this.props.addItem(this.refs.newItem.value);
      this.refs.newItem.value = "";
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref="newItem"
          placeholder="add task here"
          className="input"
        />
        &nbsp;
        <input type="submit" value="Add" className="submit" />
      </form>
    );
  }
}
export default AddTask;
