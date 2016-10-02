
import { homeController } from '../controllers/home-controller.js';
import { postsController } from '../controllers/posts-controller.js';

var router = (() => {
    let navigo;

    function init() {

        navigo = new Navigo(null, false);
        navigo
            .on('/posts/:id', postsController.getById)
            .on('/posts', postsController.all)
            .on('', homeController.all)
            //.on('/posts/add-post', postsController.add())
            .resolve();

        function getQueryParams(query) {
            let hash, vars = {},
                hashes = query.substr(1)
                    .split('&').forEach(val => {
                        hash = val.split('=');
                        vars[hash[0]] = hash[1];
                    });
            return vars;
        }
    }
    return{
        init
    }
})();

export { router }