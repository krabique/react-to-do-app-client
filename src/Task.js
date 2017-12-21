import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {
  constructor(props) {
    super();

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.cancelEditMode = this.cancelEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editTask = this.editTask.bind(this);

    this.state = {
      task: props.task,
      isEditMode: false,
    };
  }

  handleChange(event) {
    this.setState({
      newBody: event.target.value,
    });
  }

  toggleEditMode(event) {
    event.preventDefault();

    const { isEditMode, task } = this.state;

    this.setState({
      newBody: task.body,
      isEditMode: !isEditMode,
    });
  }

  editTask(event) {
    this.props.updateTask(this.state.newBody, this.props.task.created_at);
    this.cancelEditMode(event);
  }

  cancelEditMode(event) {
    event.preventDefault();

    this.setState({
      isEditMode: false,
    });
  }

  render() {
    const { task, isEditMode, newBody } = this.state;
    return (
      <tr>
        <td>
          {isEditMode && (
            <input className="form-control" value={newBody} onChange={this.handleChange} />
          )}
          {!isEditMode && (
            <div
              role="textbox"
              tabIndex={0}
              onClick={this.toggleEditMode}
              onKeyPress={this.toggleEditMode}
            >
              {task.body}
            </div>
          )}
        </td>
        <td>
          {isEditMode && (
            <button
              value={task.created_at}
              type="button"
              className="btn btn-warning"
              onClick={this.cancelEditMode}
            >
              Cancel
            </button>
          )}
          {isEditMode && (
            <button
              value={task.created_at}
              type="button"
              className="btn btn-primary"
              onClick={this.editTask}
            >
              Save
            </button>
          )}
          <button
            value={task.created_at}
            type="button"
            className="btn btn-danger"
            onClick={this.props.deleteTask}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    created_at: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;
