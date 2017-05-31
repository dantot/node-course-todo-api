const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err) {
        return console.log('Unable to connect to MongoDB Server.', err);
    }

    console.log('Connected to MongoDB Server.');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // remove duplicated Users
    db.collection('Users').deleteMany({name: 'jarod'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId('592f0da3fe67c115e6de3b02')
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });


    db.close();
});
