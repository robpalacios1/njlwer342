import React  from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newTask: '',
      tasks: [
        'sacar la ropa', 
        'hacer la cama', 
        'leer un rato'
      ]
    }
  }
  
  addTask(event) {
    event.preventDefault()
    let oldTasks = this.state.tasks
    let newTask = this.state.newTask
    this.setState({
      tasks: [...oldTasks, newTask],
      newTask: ''
    })
  }
  updateTask(event) {
    this.setState({
      newTask: event.target.value
    })
  }
  render() {
    return (
      <div class="wrapper">
        <div class="list">
          <h3>Por hacer:</h3>
          <ul class="todo">
            {this.state.tasks.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
          <form onSubmit={this.addTask.bind(this)}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateTask.bind(this)}/>
          </form>
        </div>
      </div>
    )
  }
}


export default App;
