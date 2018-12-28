import React, {Component} from 'react';
import axios from 'axios';

class Todo extends Component {
  state = {
   todos: [],
   action: "",
   action1:"",
   action2:"",
   todos1: '',
   visible:true,
   visible1:true
 }
 componentWillMount(){
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

 addTodo = () => {
   var task = {notification: this.state.action,notificationcontent:this.state.action1}
   if(task.notification && task.notificationcontent && task.notification.length > 0&&task.notificationcontent.length>0)
   {
     axios.post('/notes',task)
     .then(res => {
       if(res.data)
       {
         this.getTodos();
         this.setState({action:"",action1:"",visible:true,visible1:false})
       }
     })
   }
 }

 deleteTodo=()=>{
   var task={_id:this.state.action2}
   if(task._id&&task._id.length>0)
   {
     axios.delete('/notes/'+task._id)
     .then(res=>{
       if(res.data){
         this.getTodos();
         this.setState({action2:"",visible:true,visible1:false})
       }
     })
   }
 }

 getoneTodo=()=>{
   var task={_id:this.state.action2}
   if(task._id&&task._id.length>0){
     axios.get('/notes/'+task._id)
     .then(res => {
       if(res.data)
       {
         this.setState({todos1:res.data});
         this.setState({action2:"", visible:false,visible1:true})
       }
     })
   }
 }

 editTodo=()=>{
   var task={_id:this.state.action2}
   var data = {notification:this.state.action,notificationcontent:this.state.action1}
   console.log(task._id,task.notification,task.notificationcontent);
   if(task._id&&task._id.length>0){
     axios.put('/notes/'+task._id, data)
     .then(res=>{
       if(res.data){
         this.setState({action2:"",action:"",action1:"",visible:true,visible1:false})
       }
     })
   }
 }

 handleChange = (e) => {
   this.setState({action: e.target.value})
 }
 handleChange1 = (e) => {
   this.setState({action1: e.target.value})
 }
 handleChange2 = (e) => {
   this.setState({action2: e.target.value})
 }

 render() {
   return(
     <div>
     <h1>My Todo(s)</h1>
     <div>
     notification: <input type="text" onChange={this.handleChange} value={this.state.action} /><br/>
     notification content:<input type="text" onChange={this.handleChange1} value={this.state.action1} /><br/>
     <button onClick={this.addTodo}>add</button><br/>
     id:<input type="text" onChange={this.handleChange2} value={this.state.action2}/>
     <button onClick={this.deleteTodo}>delete</button>
     <button onClick={this.getoneTodo}>getone</button>
     <button onClick={this.editTodo}>Edit</button>
     </div>
     {this.state.visible ? (<div><ul>
       {this.state.todos &&this.state.todos.length > 0 ?
         (this.state.todos.map(todo => {return (
           <li key={todo._id}>{todo.notification}:{todo.notificationcontent}</li>
         )
       })
     )
     :null
   }
   </ul></div>): null}
   {this.state.visible1?(<div><ul>{this.state.todos1 ? (<div><p>{this.state.todos1.notification}: {this.state.todos1.notificationcontent}</p>
     </div>) : null}</ul></div>):null}
     </div>
);
}
}

export default Todo;
