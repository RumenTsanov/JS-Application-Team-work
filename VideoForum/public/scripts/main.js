import { templates } from './templates.js';
import { router } from './routing.js';

$(() => {

    router.init();

//Log in events and requests logic!

//Login button
    $('#btn-login').on('click', function () {
        var user = {
            username: $('#tb-username').val(),
            passHash: $('#tb-password').val()
        };

        $.ajax({
            url: '',
            method: 'PUT',
            data: JSON.stringify(user),
            contentType: 'application/json',
            success: function (user) {
                this.redirect('#/');
            }
        });
    });

//Register button
    $('#btn-register').on('click', function () {
        var user = {
            username: $('#tb-username').val(),
            passHash: $('#tb-password').val()
        };

        $.ajax({
            url: '',
            method: 'POST',
            data: JSON.stringify(user),
            contentType: 'application/json',
            success: function (user) {
                this.redirect('#/');
            }
        });
    });
});