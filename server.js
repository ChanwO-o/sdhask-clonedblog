var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');


/**
 * Database configuration
 */

mongoose.connect('mongodb://localhost/blog2017');

var PostSchema = mongoose.Schema({
    title: {type: String, required: true},
    posted: {type: Date, default: Date.now()},                                      // default:current date
    body: String,                                                                   //html content to string
    tag: {type: String, enum: ['Dev', 'Gaming', 'Army', 'Review', 'Social']},       // the only valid tags allowed
}, {collection: 'blogposts'}); // collection name is 'blogposts'

var PostModel = mongoose.model("PostModel", PostSchema);


/**
 * Express configuration:
 * both directories are declared separately as main sources for serving static content
 */
app.use(express.static(path.join(__dirname, 'public', 'portfolio'))); // adding '/portfolio' as first param will change url
app.use('/blog', express.static(path.join(__dirname, 'public', 'blog')));
app.use(express.static(path.join(__dirname, 'public'))); // required for accessing app.js from both portfolio & blog

app.use(bodyParser.json()); // turn on json parsing
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Mappings
 */
app.post("/api/blogposts", createBlogPost);
app.get("/api/blogposts", getAllPosts);
// app.delete("/api/blogpost/:id", deletePost);
// app.get("/api/blogpost/:id", getPostById);
// app.put("/api/blogpost/:id", updatePost);


// retrieve data from post request
function createBlogPost(req, res) {
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
function getAllPosts(req, res) {
    PostModel
        .find() // retrieve instances from a collection (no parameters: returns everything)
        .then(
            function(blogposts) { // successful: pass all data
                res.json(blogposts);
            },
            function(error) {
                res.sendStatus(400);
            }
        );
}


// route parkchanwoo.com to portfolio index // not needed, static dir setup already does this
// app.get('/', function(req, res) { // anytime anyone goes into base ('/') directory, run this function
//     // res.render('portfolio/index.html');
//     res.sendfile(path.join(__dirname, 'public', 'portfolio', 'index.html'));
// });


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

// git

// check changes with 'git status -v -v'
// git add . (call command on parent directory)
// git commit -m "asdf"
// git remote -v
// git push origin develop