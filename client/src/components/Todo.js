import React, {Component} from 'react';
import axios from 'axios';
import Input from './Input';
//import ListTodo from './ListTodo';
class Todo extends Component {
  state = {
   todos: []
 }
 // componentDidMount(){
 //   this.getTodos();
 // }
 getTodos = () => {
   axios.get('/notes')
     .then(res => {
       if(res.data){
         this.setState({
           todos: res.data
         })
       }
     })
   }

getoneTodo=()=>{
  axios.get('/notes')
  .then(res=>{
    if(res.data.id){
      this.setState({todos:res.data.id})
    }
  })
}

 render() {
   return(
     <div>
       <h1>My Todo(s)</h1>
       <Input getTodos={this.getTodos} getoneTodo={this.getoneTodo}/>
       <ul>
         {this.state.todos &&this.state.todos.length > 0 ?
           (this.state.todos.map(todo => {return (
              <li key={todo._id}>{todo.notification}:{todo.notificationcontent}</li>
                   )
                 })
               )
               :
               (
                 <li>No todo(s) left</li>
               )
         }
       </ul>
     </div>
   )
 }
}

export default Todo;
