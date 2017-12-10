import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, deleteTask }) => (
  <tr>
    <td>{task.body}</td>
    <td>
      <button value={task.created_at} type="button" className="btn btn-danger" onClick={deleteTask}>
        Delete
      </button>
    </td>
  </tr>
);

Task.propTypes = {
  task: PropTypes.shape({
    created_at: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
