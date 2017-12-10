import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      newTaskBodyValue: '',
      tasks: [
        {
          body: '123.',
        },
        {
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
        tasks: [...tasks, { body: newTaskBodyValue }],
      });
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

          <table className="table to-do-table">
            <thead>
              <tr>
                <th className="col-md-11">Description</th>
                <th className="col-md-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr>
                  <td key={task.body}>{task.body}</td>
                  <td>
                    <button type="button" className="btn btn-danger">
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

App.propTypes = {
  newTaskBodyValue: PropTypes.string.isRequired,
};

export default App;
