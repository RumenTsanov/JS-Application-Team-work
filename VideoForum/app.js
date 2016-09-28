var express = require('express'),
    bodyParser = require('body-parser');
var Everlive = require('everlive-sdk');
var db = new Everlive('2w3chu0yie1f0qjv');
db.authentication.login('project', // username
    'project', // password
    function(data) { // success callback
        console.log("Log in");
    },
    function(error) { // error callback
        console.log("Cannot log in");
    });

var app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/api/posts', function(req, res) {
    var post = req.body;
    var posts = db.data('Post');
    posts.create({
            'Messages': [],
            'Content': post.Content
        },
        function(data) {
            console.log('Create post.');
        },
        function(error) {
            console.log('Cannot create post.');
        });
});

app.get('/api/posts', function(req, res) {
    var posts = db.data('Post');
    posts.get().then(function(data) {
        res.json({ data: data });
    });
});

app.get('/api/posts/:id', function(req, res) {
    var posts = db.data('Post');
    posts.getById(req.params.id)
        .then(function(data) {
                console.log("Get post.");
                res.json({ data: data });
            },
            function(error) {
                console.log("Cannot get post.");
            });
});

app.post('/api/posts/:id/messages', function(req, res) {
    var message = req.body;
    console.log("Add message to post with id: " + req.params.id);
    var posts = db.data('Post');
    posts.getById(req.params.id)
        .then(function(data) {
                var id = data.result.Id;
                var messages = data.result.Messages;
                messages.push(message);
                posts.updateSingle({ Id: id, 'Messages': messages },
                    function(data) {
                        console.log("Added done.");
                    },
                    function(error) {
                        console.log("Error add message.");
                    });
            },
            function(error) {
                console.log("Cannot add message");
            });
});

app.post('/api/register',function (req,res) {
    var userData = req.body
    db.Users.register(userData.username,userData.password,{
        Email: userData.email,
        DisplayName: userData.displayName
    },console.log,console.log);
})

var port = 1509;
app.listen(port, function() {
    console.log(`Server is running at http://localhost:${port}`);
});