import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import TodoForm from './TodoForm';

{/*
  addTask(evt)
    This will recieve an event ooSubmit of the form and take the vale to add item in the list

  deleteTask(index)
  This will take the index of teh item to be deleted

  editTask(index , updateValue)
  This wil edit task  by taking the index and the new upaded value

  updateTask()  
  it will take the value from the input button and store in currentTask state


*/}

class App extends React.Component {
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.state = {
      tasks :[{
        text: "Buy Basket",
        completed: false
      },
      {
        text: "Buy Fruits",
        completed: false
      },
      {
        text: "Buy Table",
        completed: false
      }],
      currentTask: ''
    }
  }
  editTask(index, updatedValue){
    let tasks = this.state.tasks;
    var task = tasks[index];
    task['text'] = updatedValue;
    this.setState({
      tasks
    })
  }
  deleteTask(index){
    console.log(index)
    let tasks = this.state.tasks;
    tasks.splice(index,1);
    this.setState({
      tasks
    })
  }
  changeStatus(index){
    var tasks = this.state.tasks;
    var task = tasks[index];
    task.completed = !task.completed;
    this.setState({
      tasks
    })
  }
  addTask(evt){
    evt.preventDefault();
    let tasks = this.state.tasks;
    let currentTask = this.state.currentTask;
    tasks.push({
      text: currentTask,
      completed: false
    })
    this.setState({
      tasks: tasks,
      currentTask: ' '
    })
   
  }
  updateTask(newValue){
    this.setState({
      currentTask: newValue.target.value
    })
    
  }
  render() {
    return (
      <div>
        <TodoForm
            currentTask={this.currentTask}
            addTask={this.addTask}
            updateTask={this.updateTask}
          />

         <ul>
          {
            this.state.tasks.map((task, index)=>{
              return <TodoItem 
                detail={task} 
                key={index} 
                index={index}
                clickHandler={this.changeStatus}
                deleteTask={this.deleteTask} 
                editTask={this.editTask}
                />
            })
          }
        </ul>
      </div>
       
     
    )
  }
}

export default App;
