process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';

const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '59788643c7b05c17e9d783bb'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('59788643c7b05c17e9d783bb').then((todo) => {
    console.log(todo);
});
