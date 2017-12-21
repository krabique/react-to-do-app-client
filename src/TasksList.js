import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({
  tasks, deleteTask, updateTask, handleEditTaskInputChange,
}) => (
  <table className="table to-do-table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => (
        <Task
          key={task.created_at}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          handleEditTaskInputChange={handleEditTaskInputChange}
        />
      ))}
    </tbody>
  </table>
);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  handleEditTaskInputChange: PropTypes.func.isRequired,
};

export default TasksList;
