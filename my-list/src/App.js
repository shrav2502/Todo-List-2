import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import TodoData from "./Components/TodoData";
import TodoItem from "./Components/TodoItem";
import AddTask from "./Components/AddTask";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChanges(id) {
    const checkedItem = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({
      todos: checkedItem,
    });
  }

  removeItem(val) {
    const removedItem = this.state.todos.filter((item) => {
      return val != item.task;
    });
    this.setState({
      todos: removedItem,
    });
  }

  addItem(value) {
    const task = this.state.todos;
    const add = {
      id: value,
      task: value,
      completed: false,
    };
    task.push(add);
    this.setState({
      todos: task,
    });
  }

  render() {
    const updatedItem = this.state.todos.map((item) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          handleChanges={this.handleChanges}
          removeItem={this.removeItem}
        />
      );
    });
    return (
      <div class="container">
        {updatedItem}
        <AddTask addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
