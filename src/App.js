import React from 'react';
// import { Component } from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const { tasks } = this.state;

    return (
      <div className="App">
        <div className="container">
          <form className="form-inline">
            <div className="form-group col-md-12">
              <input
                className="form-control col-md-11"
                type="text"
                placeholder="Conquer the world!"
                id="example-text-input"
              />

              <button type="submit" className="btn btn-primary col-md-1">
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

export default App;
