const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect( 'mongodb://localhost:27017/easy-notes', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });
require('./app/routes/note.routes.js')(app);

app.listen(5000, () => {
 console.log("server is running on port No:5000")
})



// const names=[
// {id:1,name:"John",age:10},
// {id:2,name:"Doe",age:20},
// {id:3,name:"Woaks",age:40},
// ]
//
// app.get('/api/names',(req,res) => {
//   res.send(names);
// })
//
// app.get('/api/names/:id', (req, res) => {
//  const getone = names.find(key => key.id === parseInt(req.params.id));
//  res.send(getone);
// });
//
// app.post('/api/names', (req,res) => {
//   const posting = {
//      id:names.length + 1,
//      name:req.body.name,
//      age:req.body.age
//      };
//      names.push(posting);
//      res.send(names);
//    });
//
// app.put('/api/names/:id',(req,res) => {
//   const updating=names.find(key => key.id === parseInt(req.params.id));
// updating.name=req.body.name;
// updating.age=req.body.age;
// res.send(updating);
// });
//
// app.delete("/api/names/:id",(req,res) => {
//   const deleting=names.find(key => key.id === parseInt(req.params.id));
//   const index=names.indexOf(deleting);
//   names.splice(index,1);
//   res.send(deleting);
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const app = express();
// //
// // var mongoose=require('mongoose');
// // var Schema = mongoose.Schema;
// // mongoose.connect('mongodb://localhost:27017/weathermongodb', { useNewUrlParser: true }).then(
// //   ()=>{
// //     console.log('Connected');
// //   },err=> {
// //     console.log('failed')
// //   }
// // );
// // mongoose.Promise = global.Promise;
// // var WeatherSchema = new Schema({
// //   city: {
// //     type: String,
// //     required :[true, "name is req"]
// //   },
// //   pinCode: {
// //     type: Number,
// //     required: [true, "pinCode is req" ]
// //   },
// //   temperature:{
// //     type: Number,
// //     required:[true, "temperature is req"]
// //   },
// //   Date: {
// //     type: Date,
// //     default: Date.now
// //   }
// // })
// // var WeatherData = mongoose.model("WeatherApp", WeatherSchema);
// // app.get('/api/customers', (req, res) => {
// //   WeatherData.find().then((data)=>console.log(data, "data"))
// // });
// // app.post('/api/customers', (req, res) => {
// //   console.log(req.body);
// //     WeatherData.create(req.body).then((data)=>console.log(req.data, "data"))
// // });
// app.get('/api/vendors', (req, res) => {
//   const vendors = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//     {id: 444, firstName: 'raj', lastName: 'kumar'}
//   ];
//
//
//   res.json({data:vendors,"message":"green"});
// });
//
// app.get('/api/vendors1/:id', function(req, res) {
//   const vendors1 = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//     {id: 44, firstName: 'raj', lastName: 'kumar'}
//   ];
//
//   let id = req.params.id;
//   var obj=vendors1.filter(getid => getid.id==id);
//   res.send({"message":"hi "+req.params.id,"data":obj});
//
//   });
//
//   app.get('/api/vendors/search',function(req, res) {
//
//     const vendors = [
//       {id: 1, firstName: 'John', lastName: 'Doe'},
//       {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//       {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//       {id: 44, firstName: 'raj', lastName: 'kumar'}
//     ];
//    var fn = req.query.firstName;
//      var obj=vendors.filter(getid => getid.firstName==fn);
//
//       res.send({"message":"hi "+req.query.firstName,"data":obj});
//
// });
