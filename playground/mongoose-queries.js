const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '593144cf4f2d8d27f759551d';

if(!ObjectId.isValid(id)) {
    return console.log(`_id is not valid ${id}`);
}

// User.find({
//     _id: id
// }).then((user) => {
//     if(!user[0]) {
//         return console.log(`_id not found ${id}`);
//     }
//     console.log('find Users', user);
// }).catch((e) => console.log(e.message));
//
// User.findOne({
//     _id: id
// }).then((user) => {
//     if(!user) {
//         return console.log(`_id not found ${id}`);
//     }
//     console.log('findOne User', user);
// }).catch((e) => console.log(e.message));

User.findById(id).then((user) => {
    if(!user) {
        return console.log(`Unable to find user! _id: ${id}`);
    }
    console.log('findById User', user);
}).catch((e) => console.log(e.message));

// Todos //

// var id = '59313f33021f291ddab53e33';

// if(!ObjectId.isValid(id)) {
//     return console.log(`_id is not valid ${id}`);
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('find Todos', todos);
// }).catch((e) => console.log(e.message));
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('findOne Todos', todo);
// }).catch((e) => console.log(e.message));
//
// Todo.findById(id).then((todo) => {
//
//     if(!todo) {
//         return console.log(`_id not found ${id}`);
//     }
//
//     console.log('findById Todos', todo);
// }).catch((e) => console.log(e.message));
