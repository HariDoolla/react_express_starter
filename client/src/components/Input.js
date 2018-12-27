import React, { Component } from 'react';
import axios from 'axios';
class Input extends Component {
  state = {
   action: "",
   action1:"",
   action2:"",
   str:[]
 }
 addTodo = () => {
   var task = {notification: this.state.action,notificationcontent:this.state.action1}

   if(task.notification && task.notificationcontent && task.notification.length > 0&&task.notificationcontent.length>0)
   {
     axios.post('/notes',task)
       .then(res => {
         if(res.data)
         {
           this.props.getTodos();
           this.setState({action:"",action1:""})
         }
       })
   }
 }
 deleteTodo=()=>{
   var task={_id:this.state.action2}
   console.log(task)
   if(task._id&&task._id.length>0)
   {
     axios.delete('/notes/'+task._id)
     .then(res=>{
       if(res.data){
         this.props.getTodos();
         this.setState({action2:""})
       }
     })
   }
}

 getoneTodo=()=>{
   var task={_id:this.state.action2}
   if(task._id&&task._id.length>0){
     axios.get('/notes/'+task._id,task._id)
     .then(res => {
       if(res.data)
       {
         this.props.getoneTodo();
         this.setState({action2:""})
       }
     })
 }
 }

handleChange = (e) => {
  this.setState({action: e.target.value})}
handleChange1 = (e) => {
  this.setState({action1: e.target.value})}
handleChange2 = (e) => {
  this.setState({action2: e.target.value})}

 render() {
   return (
     <div>
      notification: <input type="text" onChange={this.handleChange} value={this.state.action} /><br/>
  notification content:<input type="text" onChange={this.handleChange1} value={this.state.action1} /><br/>
       <button onClick={this.addTodo}>add</button><br/>
       id:<input type="text" onChange={this.handleChange2} value={this.state.action2}/>
       <button onClick={this.deleteTodo}>delete</button>
       <button onClick={this.getoneTodo}>getone</button>
       </div>
   )
 }
}

export default Input
