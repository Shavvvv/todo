// Require the Model
// a model by convention singular and upperCase
const TodoModel = require('../models/todo')

module.exports = {
	index, // shortcut for below
	// index: index 
	show,
	// show: show,
	// optionally
	new: newTodo,
	create,
	delete: deleteTodo
}

function deleteTodo(req, res){

	TodoModel.deleteOne(req.params.id)

	res.redirect('/todos')
}

function create(req, res){
	console.log(req.body, " <- contents of the form!")

	// MODEL TAKE THE CONTENTS OF THE FORM AND PUT IT IN THE DATABASE
	const todo = TodoModel.create(req.body)
	// THEN RESPOND TO THE CLIENT


	// 1st response, and make sure the function is running
	// then write the model logic!
	res.redirect(`/todos/${todo.id}`); // <- /todos is referring to a route
	// not A VIEW OR FILEPATH!

	
}

function newTodo(req, res){

	res.render('todos/new')
}





function show(req, res){
	console.log(req.params, " <- req.params.id")
	const todo = TodoModel.getOne(req.params.id)
	res.render('todos/show', {todo: todo})
}



// then render the todos/index.ejs, and inject a todos variable,
// that contains all the todos in the model file

function index(req, res, next) {
	const todosFromTheDatabase =  TodoModel.getAll()
	res.render('todos/index.ejs', {todos: todosFromTheDatabase})
}

