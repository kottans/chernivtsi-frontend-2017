import React, { Component } from 'react';
import TodosList from './components/TodosList'


var rand = require('random-key');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: '',
                  todos: [
                    {value: 'kek', done: false, id:1},
                    {value:'superkek', done: false, id:2},
                    {value:'omegakek', done: false, id:3}],}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleClearDone = this.handleClearDone.bind(this);
  }


  handleSubmit(event){
    event.preventDefault();
    var value = this.state.value;
    var newTodo = this.state.todos.concat({value: value,
                                          id: rand.generate(),
                                          done: false});
    this.setState({value: '', todos: newTodo})
  }
  
  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleDelete(todoDelete){
    var newTodo = this.state.todos.filter((todo) => {
      return todo.id !== todoDelete;
    });
    this.setState({value:'',todos: newTodo});
  }

  handleDone(todoDone){
    var _todos = this.state.todos;
    var todo = _todos.filter((todo)=>{
      return todo.id === todoDone;
    })[0];

    todo.done = !todo.done;

    this.setState({todos: _todos})
  }

  handleClearDone(event){
    var newTodos = this.state.todos.filter((todo)=>{
      return !todo.done;
    });
    this.setState({todos: newTodos});
  }


  
  render() {
    return  <div> 
              <h1>TODO</h1>

              <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
              <button id="btns">
                Submit
              </button>
              </form>

              

              <TodosList 
                handleDone={this.handleDone}
                handleDelete={this.handleDelete}
                todos={this.state.todos} />

              <footer>
                All: {this.state.todos.length} | 
                Done: 
                {this.state.todos.filter((todo) => {return todo.done}).length} | 
                Todo: 
                {this.state.todos.filter((todo) => {return !todo.done}).length} | 
                <a href="#" id="btns" onClick={this.handleClearDone}>Clear Done</a>
              </footer>

            </div>
  }
}

export default App;
