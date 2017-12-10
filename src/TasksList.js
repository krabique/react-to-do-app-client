import React from 'react';
import PropTypes from 'prop-types';

const TasksList = ({ tasks, deleteTask }) => (
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
              onClick={deleteTask}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.number,
    body: PropTypes.string,
  })).isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TasksList;
