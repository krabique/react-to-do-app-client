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
