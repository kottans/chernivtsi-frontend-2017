import React, {Component} from 'react';
import Todo from './Todo'

class TodosList extends Component{


  render(){
    return  <ul id="todo-list"> 
              {this.props.todos.map((todo, i)=>{
               return<section id="main" key={todo.id}>
               
                   <Todo
                    handleDelete={this.props.handleDelete}
                    todo={todo}
                    handleDone={this.props.handleDone}/>
                    </section>
              })}
              
            </ul>
  }
}


export default TodosList