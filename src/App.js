import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
      listTask:[]
    }
  }

  onChangeText = (event) => {
    console.log(event.target.value)
    this.setState({newTask:event.target.value})
  }

  enviarFormulario = (event) => {
    event.preventDefault(); // cuando das enter no se refresca
    const {newTask,listTask}=this.state;
    //const listaTareas=[];
    listTask.push(newTask);


    this.setState({listTask:listTask,newTask:""})


  }

  render() {
    const {newTask,listTask}=this.state;

    return (
      <div className="container">
        <h1 className="title">Lista de tareas <span aria-label="emoji" role="img">🔥</span></h1>
        <form onSubmit={this.enviarFormulario}>
          <input value={newTask} type="text" className="new-task" onChange={this.onChangeText} />
        </form>
        <h2 className="test-label">{newTask}</h2>
        {listTask.map((task)=>(   //map. permite recorrer una lista

          <div className="task-container">
            <h3 className="task">{task}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;