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
        $('#btn-login').on('click', function() {
            var user = {
                username: $('#tb-username').val(),
                password: $('#tb-password').val(),
            };

            data.users.login(user)
                .then(function() {
                    context.redirect('#/');
                    document.location.reload(true);
                }).then(function() {
                    $('.input-group').hide();
                    $('#btn-login').html('Logout');
                });
        });

    }

    function logout(context) {
        var btnLogout = $('#btn-login');
        if (btnLogout.html() === 'Logout') {
            $('#btn-login').on('click', function() {
                data.users.logout(user)
                    .then(function() {
                        context.redirect('#/');
                        document.location.reload(true);
                    }).then(function() {
                        $('.input-group').show();
                        $('#btn-login').html('Login');
                    });
            });
        }
    }

    return {
        register: register,
        login: login,
        logout: logout
    };
}();

export { usersContoller };