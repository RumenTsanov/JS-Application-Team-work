import { templates } from './templates.js';
import { router } from './routing.js';

<<<<<<< HEAD
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
=======
router.init();
>>>>>>> 9e6692a7001fcaee49f364739979ce50a07f2d3b
