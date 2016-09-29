import { templates } from './templates.js';
import { homeController } from '../controllers/home-controller.js';
import { postsController } from '../controllers/posts-controller.js';

let router = new Navigo(null, true);

router
    .on('', homeController.all)
    .on('/posts', postsController.all)
    .resolve();

//Log in events and requests logic!

//Login button
$('#btn-login').on('click', function() {
    var user = {
        username: $('#tb-username').val(),
        passHash: $('#tb-password').val()
    };

    $.ajax({
        url: '',
        method: 'PUT',
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: function(user) {
            this.redirect('#/');
        }
    });
});

//Register button
$('#btn-register').on('click', function() {
    var user = {
        username: $('#tb-username').val(),
        passHash: $('#tb-password').val()
    };

    $.ajax({
        url: '',
        method: 'POST',
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: function(user) {
            this.redirect('#/');
        }
    });
});