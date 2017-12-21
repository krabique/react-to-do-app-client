import React, { Component } from 'react';
import './App.scss';
import TasksList from './TasksList';
import NewTaskForm from './NewTaskForm';

class App extends Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.handleNewTaskInputChange = this.handleNewTaskInputChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.handleEditTaskInputChange = this.handleEditTaskInputChange.bind(this);

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

    const newTasks = () => {
      const filteredTasks = tasks;
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].created_at === parseInt(event.target.value, 10)) {
          filteredTasks.splice(i, 1);
          break;
        }
      }
      return filteredTasks;
    };

    this.setState({ tasks: newTasks() }, this.updateTasks);
  }

  updateTask(newBody, createdAt) {
    const { tasks } = this.state;

    const index = tasks.findIndex(task => task.created_at === createdAt);
    tasks[index].body = newBody;

    this.setState(
      {
        tasks,
      },
      this.updateTasks,
    );
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

  handleNewTaskInputChange(event) {
    this.setState({ newTaskBodyValue: event.target.value });
  }

  handleEditTaskInputChange(event) {
    this.setState({ newTaskBodyValue: event.target.value });
  }

  render() {
    const { tasks, newTaskBodyValue } = this.state;
    const isEnabled = newTaskBodyValue.length > 0;

    return (
      <div className="App">
        <div className="container">
          <NewTaskForm
            addTask={this.addTask}
            newTaskBodyValue={newTaskBodyValue}
            handleNewTaskInputChange={this.handleNewTaskInputChange}
            isEnabled={isEnabled}
          />
          <TasksList
            tasks={tasks}
            deleteTask={this.deleteTask}
            updateTask={this.updateTask}
            isEditMode={this.isEditMode}
            handleEditTaskInputChange={this.handleEditTaskInputChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
