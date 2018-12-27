import React from 'react';
const ListTodo = ({todos}) => {

 return (
   <ul>
     {
       todos &&
         todos.length > 0 ?
           (
             todos.map(todo => {
               return (
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
 )
}

export default ListTodo
