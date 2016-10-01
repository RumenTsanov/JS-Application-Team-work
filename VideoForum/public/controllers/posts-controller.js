import { templates } from '../scripts/templates.js';
import { data } from '../scripts/data.js';

let postsController = function () { 
    function all() {
      Promise.all([data.posts.get(), templates.get('posts')])
          .then(([data, template]) => {
              let html = template(data);
              console.log(data);
              $('#content').html(html);
          })
          .catch((err) => showMsg(err, 'Error', 'alert-danger'))
  }
  function getById(params) {
    
  }

  function add(params) {
    
  }


  return {
    all: all,
    getById: getById,
    add: add
  };
 }();

 export { postsController }