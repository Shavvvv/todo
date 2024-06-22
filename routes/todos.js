var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');


/* GET users listing. */

// Listen for HTTP Requests
// then they run the ctrl

// locahost:3000/todos/
router.get('/', todosCtrl.index);
// locahost:3000/todos/new
router.get('/new', todosCtrl.new);
// locahost:3000/todos/12345
router.get('/:id', todosCtrl.show);
// locahost:3000/todos/ POST request
router.post('/', todosCtrl.create);

router.delete('/:id', todosCtrl.delete)

module.exports = router;


