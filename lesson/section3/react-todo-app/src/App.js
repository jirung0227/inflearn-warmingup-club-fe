import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  state = {
    todoData: [],
    value: "",
  };

  handleClick = (id) => {
    const newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodoData = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    this.setState({
      todoData: [...this.state.todoData, newTodoData],
      value: "",
    });
  };

  handleCompleChange = (id) => {
    console.log(id);
    const newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    console.log(newTodoData);

    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
            <form
              style={{ display: "flex" }}
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <input
                type='text'
                name='value'
                style={{ flex: "10", padding: "5px" }}
                placeholder='할 일을 입력해주세요'
                value={this.state.value}
                onChange={(e) => this.handleChange(e)}
              />
              <input
                type='submit'
                value='추가'
                className='btn'
                style={{ flex: "1" }}
              />
            </form>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.listStyle(data.completed)} key={data.id}>
              <p>
                <input
                  type='checkbox'
                  defaultChecked={false}
                  onChange={() => this.handleCompleChange(data.id)}
                />
                {data.title}
                <button
                  style={this.btnStyle}
                  onClick={() => this.handleClick(data.id)}
                >
                  x
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
