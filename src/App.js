import React, { Component } from 'react';
import './App.scss';
import TasksList from './TasksList';

class App extends Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.state = {
      tasks: [
        {
          created_at: Date.now(),
          body: 'Lorem ipsum dolor sit amet consectetur.',
        },
        {
          created_at: Date.now() + 1,
          body: 'Lorem ipsum dolor sit.',
        },
      ],
      newTaskBodyValue: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('tasks')) {
      this.fetchTasks();
    }
  }

  fetchTasks() {
    if (localStorage.getItem('tasks').length) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks')),
      });
    }
  }

  deleteTask(event) {
    event.preventDefault();
    const { tasks } = this.state;
    const newTasks = tasks.filter(hash => hash.created_at !== parseInt(event.target.value, 10));
    this.setState({ tasks: newTasks }, this.updateTasks);
  }

  updateTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  addTask(event) {
    event.preventDefault();

    const { tasks, newTaskBodyValue } = this.state;

    if (newTaskBodyValue.length > 0) {
      this.setState(
        {
          tasks: [...tasks, { created_at: Date.now(), body: newTaskBodyValue }],
          newTaskBodyValue: '',
        },
        this.updateTasks,
      );
    }
  }

  handleChange(event) {
    this.setState({ newTaskBodyValue: event.target.value });
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

          <TasksList tasks={tasks} deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}

export default App;
