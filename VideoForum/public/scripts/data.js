
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

    // start posts
    function postsGet() {
        return new Promise((resolve,reject) => {
            $.getJSON('/api/posts')
                .done(resolve)
                .fail(reject)
        })
    }

    function postsAdd(title) {


    }

    function postById(id) {

    }

    function postsAddComment(postId, content) {

    }
    // end posts


    return {
        users: {
            register : userRegister,
            login: userLogin,
            logout: userLogout,
            current: userGetCurrent
        },
        posts: {
            get: postsGet,
            add: postsAdd,
            getById: postById,
            addMessage: postsAddComment
        }
    }
})();

export { data };
