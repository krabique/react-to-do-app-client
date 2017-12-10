import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.state = {
      newTaskBodyValue: '',
      tasks: [
        {
          created_at: Date.now(),
          body: '123.',
        },
        {
          created_at: Date.now() + 1,
          body: '456.',
        },
      ],
    };
  }

  addTask(event) {
    const bodyIsValid = (body) => {
      if (body.length > 0) {
        return true;
      }
      return false;
    };

    const { tasks, newTaskBodyValue } = this.state;

    event.preventDefault();
    if (bodyIsValid(newTaskBodyValue)) {
      this.setState({
        tasks: [...tasks, { created_at: Date.now(), body: newTaskBodyValue }],
        newTaskBodyValue: '',
      });
    }
  }

  handleChange(event) {
    this.setState({ newTaskBodyValue: event.target.value });
  }

  deleteTask(event) {
    event.preventDefault();
    const { tasks } = this.state;
    const newTasks = tasks.filter(hash => hash.created_at !== parseInt(event.target.value, 10));
    this.setState({ tasks: newTasks });
  }

  render() {
    const { tasks, newTaskBodyValue } = this.state;
    const isEnabled = newTaskBodyValue.length > 0;

    return (
      <div className="App">
        <div className="container">
          <form className="form-inline" onSubmit={this.addTask}>
            <div className="form-group col-md-12">
              <input
                className="form-control col-md-11"
                type="text"
                placeholder="Conquer the world!"
                id="body"
                name="body"
                value={this.state.newTaskBodyValue}
                onChange={this.handleChange}
              />
              <button type="submit" disabled={!isEnabled} className="btn btn-primary col-md-1">
                Add
              </button>
            </div>
          </form>

          <table className="table to-do-table">
            <thead>
              <tr>
                <th className="col-md-11">Description</th>
                <th className="col-md-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.created_at}>
                  <td>{task.body}</td>
                  <td>
                    <button
                      value={task.created_at}
                      type="button"
                      className="btn btn-danger"
                      onClick={this.deleteTask}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
