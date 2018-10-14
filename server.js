var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');


/**
 * Database configuration
 */

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost:27017/scheduledb', {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection to db failed"));
db.once('open', function() {
  console.log("Connection to db successful!");
});


var PostSchema = mongoose.Schema({
    userid: {type: String, required: true},
    monday: [[Number]],
    tuesday: [[Number]],
    wednesday: [[Number]],
    thursday: [[Number]],
    friday: [[Number]],
    saturday: [[Number]],
    sunday: [[Number]]
}, {collection: 'schedules'}); // collection name is 'blog2018'

var PostModel = mongoose.model("PostModel", PostSchema);


/**
 * Express configuration:
 * directory declared as main source for serving static content
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // turn on json parsing
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Mappings
 */
 
app.post("/api/schedules", createSchedule);
app.get("/api/schedules", getAllSchedules);
app.get("/api/schedules/:id", getScheduleById);
// app.get("/singlesample", function(req, res) {
//     res.send('sinsam');
// });


// retrieve data from post request
function createSchedule(req, res) {
    var theblogpost = req.body;
    console.log("request received:", theblogpost);
    PostModel
        .create(theblogpost) // an asynchronous call to insert post object to database ** creates 'race condition'; we must handle both success & fail cases
        .then(
            function (postObj) {   // successful callback from database
                res.json(200); // respond to request by returning status ok
                console.log("ok");
            },
            function (error) {   // fail
                res.sendStatus(400);    // http unsuccessful request
                console.log("not ok");
            }
        )
}

// retrieve all posts from database as an array, send back to client
function getAllSchedules(req, res) {
    PostModel
        .find() // retrieve instances from a collection (no parameters: returns everything)
        .then(
            function(blogposts) { // successful: pass all data
                res.json(blogposts);
                // createBlogPost();        //**TODO** REMOVE THIS TEST
            },
            function(error) {
                res.sendStatus(400);
            }
        );
}

// return post with id
function getScheduleById(req, res) {
    var blogpostId = req.params.id;
    PostModel
        // filtered search
        //.find({ _id: blogpostId}) // find() method ALWAYS returns an array '[]'; even though we only have one blog post. use findById() instead to return single object
        .findById(blogpostId) // findById() method doesn't require any filter (i.e. "_id:") because ids are unique. Filter is implied
        .then(
            function(blogpost) {
                res.json(blogpost);
            },
            function(error) {
                res.sendStatus(400);
            }
        );
}



var port = process.env.PORT; // replace as 5000
app.listen(port, function() {
    console.log('SERVER RUNNING... PORT: ' + port);
});


// follow this tutorial for setting up & running mongodb
// https://docs.c9.io/v1.0/docs/setup-a-database
// mongod --bind_ip=$IP --nojournal

// fixing mongod: add repair flag
// mongod --bind_ip=$IP --nojournal --repair
// then mongod --bind_ip=$IP --nojournal


// mongod

// mongo > starts shell
// show dbs
// use blogposts
// show collections
// db.blog2018.find()
// db.blog2018.remove({"title": "t1"})
// db.blog2018.insert({title: 'Mongo test title1', posted: ISODate("2017-11-21T23:38:32.406Z"), author: 'Chan Woo Park', body: '<h1>London</h1><h3>London is the capital city of England.</h3>'})
// mongo -u blogger -p --authenticationDatabase blogposts
// user: blogger pw: asdf123

// git

// check changes with 'git status -v -v'
// git add . (call command on parent directory)
// git commit -m "asdf"
// git remote -v
// git push origin develop