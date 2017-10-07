var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');


/**
 * Database configuration
 */

mongoose.connect('mongodb://localhost/blog');

var PostSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: String,                                                                   //html content to string
    tag: {type: String, enum: ['Dev', 'Gaming', 'Army', 'Review', 'Social']},       // the only valid tags allowed
    posted: {type: Date, default: Date.now()}                                       // default:current date
}, {collection: 'blogposts'}); // collection name is 'blogposts'

var PostModel = mongoose.model("PostModel", PostSchema);



app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());     // turn on json parsing
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Mappings
 */

// app.post("/api/blogpost", createBlogPost);
// app.get("/api/blogpost", getAllPosts);
// app.delete("/api/blogpost/:id", deletePost);
// app.get("/api/blogpost/:id", getPostById);
// app.put("/api/blogpost/:id", updatePost);





var port = process.env.PORT;
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
// use myblog2017
// show collections
// db.blogposts.find()