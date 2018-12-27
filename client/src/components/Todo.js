import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {

 state = {
   todos: []
 }

 componentDidMount(){
   this.getTodos();
 }

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

   // deleteTodo = (id) => {
   //   axios.delete(`/notes/${id}`)
   //     .then(res => {
   //       if(res.data){
   //         this.getTodos()
   //       }
   //     })
   // }
   updateTodo =(id)=>{
     console.log("id",id);
     axios.put("/notes",id)
     .then(res=>{
       if(res.data){
         this.getTodos()
       }
     })
   }
 render() {
   let { todos } = this.state;

   return(
     <div>
       <h1>My Todo(s)</h1>
       <Input getTodos={this.getTodos}/>
       <ListTodo todos={todos}/>
     </div>
   )
 }
}

export default Todo;
