// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

// var user = {
//     name: 'jarod',
//     age: 29,
//     location: '1055 Honved ter Hungary'
// };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server.', err);
    }

    console.log('Connected to MongoDB Server.');

    db.collection('todos').insertOne({
        text: 'Walk dog',
        completed: false,
        completedAt: null
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo.', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    //
    db.collection('users').insertOne({
        name: 'janos',
        age: 29,
        location: '1055 Honved ter Hungary'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user.', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

    db.close();
});
