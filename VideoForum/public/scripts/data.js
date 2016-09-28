
var data = (function () {



    // start users
    function userRegister(username,pasword,email,displayName) {
        return new Promise((resolve,reject) => {
            let body = {
                'username': username,
                'password': pasword,
                'email': email,
                'displayName': displayName
            }
            $.ajax({
                 type: 'POST',
                  url: 'api/register',
                data: JSON.stringify(data),
                contentType: 'application/json'
            }).done(resolve)
                .fail(reject)
        })
    }
    function userLogin(username,password) {

    }

    function userLogout() {

    }

    function userGetCurrent() {

    }
    // end users

    // start threads
    function threadsGet() {
        return new Promise((resolve,reject) => {
            $.getJSON('/api/posts')
                .done(resolve)
                .fail(reject)
        })
    }

    function threadsAdd(title) {


    }

    function threadById(id) {

    }

    function threadsAddMessage(threadId, content) {

    }
    // end threads


    return {
        users: {
            register : userRegister,
            login: userLogin,
            logout: userLogout,
            current: userGetCurrent
        },
        threads: {
            get: threadsGet,
            add: threadsAdd,
            getById: threadById,
            addMessage: threadsAddMessage
        }
    }
})();

export { data };
