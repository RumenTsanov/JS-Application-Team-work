
var data = (function () {



    // start users
    function userLogin(username,password) {

    }

    function userLogout() {

    }

    function userGetCurrent() {

    }
    // end users

    // start threads
    function threadsGet() {

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
