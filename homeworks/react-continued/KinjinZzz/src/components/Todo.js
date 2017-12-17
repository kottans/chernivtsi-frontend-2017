import React, {Component} from 'react';

class Todo extends Component{


  
  render(){
    var todo = this.props.todo;
    var value = todo.value;
    return  <li>

              <input
                checked={todo.done}
                onChange={this.props.handleDone.bind(this, todo.id)} 
                type="checkbox" />
              {value}

              <a href='#' className="del" onClick={this.props.handleDelete.bind(this, todo.id)}>
                [X]
              </a>
            
              </li>
  }
}


export default Todo