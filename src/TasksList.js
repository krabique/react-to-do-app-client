import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({ tasks, deleteTask }) => (
  <table className="table to-do-table">
    <thead>
      <tr>
        <th className="col-md-11">Description</th>
        <th className="col-md-1">Action</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => <Task key={task.created_at} task={task} deleteTask={deleteTask} />)}
    </tbody>
  </table>
);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TasksList;
