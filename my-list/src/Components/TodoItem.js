import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange() {
    this.props.handleChanges(this.props.item.id);
  }
  handleClick() {
    this.props.removeItem(this.props.item.task);
  }
  render() {
    return (
      <div>
        <div class="child">
          <span className="checkbox">
            <input
              type="checkbox"
              checked={this.props.item.completed}
              onChange={this.handleChange}
            />
          </span>
          &nbsp;&nbsp;
          <span
            className="list"
            style={{
              textDecoration: this.props.item.completed ? "line-through" : null,
              color: this.props.item.completed ? "#999" : null,
            }}
          >
            {this.props.item.task}
          </span>
          <span className="delete" onClick={this.handleClick}>
            X
          </span>
        </div>
        <br />
      </div>
    );
  }
}
export default TodoItem;
