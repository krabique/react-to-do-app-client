import React from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({
  addTask, newTaskBodyValue, handleChange, isEnabled,
}) => (
  <form className="form-inline" onSubmit={addTask}>
    <div className="form-group col-md-12">
      <input
        className="form-control col-md-11"
        type="text"
        placeholder="Conquer the world!"
        id="body"
        name="body"
        value={newTaskBodyValue}
        onChange={handleChange}
      />
      <button type="submit" disabled={!isEnabled} className="btn btn-primary col-md-1">
        Add
      </button>
    </div>
  </form>
);

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  newTaskBodyValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool.isRequired,
};

export default NewTaskForm;
