const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err) {
        return console.log('Unable to connect to MongoDB Server.', err);
    }

    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('592f3886f7e01735eec596d1')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     name: 'jarod'
    // }, {
    //     $set: {
    //         name: 'virag',
    //         age: 17
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('592f3b023500ea3c5120d939')
    }, {
        $set: {
            name: 'jarod',
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});
