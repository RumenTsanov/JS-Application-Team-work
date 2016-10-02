import { templates } from '../scripts/templates.js';
import { data } from '../scripts/data.js';

let usersContoller = function() {

    function register(context) {
        templates.get('register')
            .then(function(template) {
                context.$element().html(template());

                $('#btn-register').on('click', function() {
                    var user = {
                        username: $('#tb-username').val(),
                        password: $('#tb-password').val(),
                        email: $('#tb-email').val(),
                        displayName: $('#tb-displayName').val()
                    };

                    data.users.register(user)
                        .then(function() {
                            context.redirect('#/');
                            document.location.reload(true);
                        });
                });
            });
    }

    function login(context) {
        $.('#btn-login').on('click', function() {
            var user = {
                username: $('#tb-username').val(),
                password: $('#tb-password').val(),
            };

            data.users.login(user)
                .then(function() {
                    context.redirect('#/');
                    document.location.reload(true);
                });
        });

    }

    return {
        register: register,
        login: login
    };
}();

export { usersContoller };