var data = (function() {

    // start users
    function userRegister(username, password, email, displayName) {
        return new Promise((resolve, reject) => {
            let body = {
                username: user.username,
                password: user.password,
                email: user.email,
                displayName: user.displayName
            };
            $.ajax({
                    type: 'POST',
                    url: 'api/register',
                    data: JSON.stringify(body),
                    contentType: 'application/json',
                }).done((data) => resolve(data))
                .fail((err) => reject(err));

        })
    }

    function userLogin(username, password) {
        return new Promise((resolve, reject) => {
            let body = {
                uername: user.username,
                password: user.password
            };
            $.ajax({
                    type: 'PUT',
                    url: 'api/login',
                    data: JSON.stringify(body),
                    contentType: 'application/json',
                    success: function(user) {
                        console.log('suces is trigerd');
                        localStorage.setItem('User', user.username);
                    }
                }).done(resolve)
                .fail(reject);
        })
    }

    function userLogout() {
        return new Promise((resolve, reject) => {

            $.ajax({
                    type: 'DELETE',
                    url: 'api/logout',
                    success: function() {
                        console.log('successfully remove User token from localStorage');
                        localStorage.removeItem('User');
                    }
                }).done(resolve)
                .fail(reject);
        })
    }

    function userGetCurrent() {
        return Promise.resolve(localStorage.getItem('User'));
    }
    // end users

    // start posts
    function postsGet() {
        return new Promise((resolve, reject) => {
            $.getJSON('/api/posts')
                .done(resolve)
                .fail(reject)
        });
    }

    function postAdd(post) {
        return new Promise((resolve, reject) => {
            let body = {
                Title: post.title,
                Content: post.content,
                Url: post.url,
                Rating: 0
            }

            $.ajax({
                    type: 'POST',
                    url: '/api/posts',
                    data: JSON.stringify(body),
                    contentType: 'application/json'
                })
                .done(resolve)
                .fail(reject);
        });
    }

    function postById(id) {
        return new Promise((resolve, reject) => {
            $.getJSON(`api/posts/${id}`)
                .done(resolve)
                .fail(reject);
        })
    }

    function postsAddComment(postId, content) {

    }
    // end posts


    return {
        users: {
            register: userRegister,
            login: userLogin,
            logout: userLogout,
            current: userGetCurrent
        },
        posts: {
            get: postsGet,
            add: postAdd,
            getById: postById,
            addMessage: postsAddComment
        }
    }
})();

export { data };