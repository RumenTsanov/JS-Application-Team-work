import { templates } from '../scripts/templates.js';
import { data } from '../scripts/data.js';
import { utils } from '../scripts/utils.js';


let postsController = function () { 
    function all() {
      Promise.all([data.posts.get(), templates.get('posts')])
          .then(([data, template]) => {
              console.log(data);
              let html = template(data);
              $('#content').html(html);
          })
          .catch((err) => utils.showMsg(err, 'Error', 'alert-danger'))
  }
  function getById(params) {
      Promise.all([data.posts.getById(params.id), templates.get('post')])
          .then(([data, template]) => {
              console.log(data);
              let html = template(data);
              $('#content').html(html);
          })
          .catch((err) => utils.showMsg(err, 'Error', 'alert-danger'));
  }

  function add() {
      templates.get('add-post')
          .then(function(template) {
              $('#content').html(template());

              let post;
              $('#add-post').on('click', () => {
                  let videoId = $('#url').val().substr(32, 11);
                  let url = 'https://www.youtube.com/embed/' + videoId;
//
                  post = {
                      title: $('#title').val(),
                      content: $('textarea#content').val(),
                      url: url
                  };
                  console.log(post);
                  data.posts.add(post)
                     .then(function () {
                          setTimeout(function () {
                              window.location.href = '#/posts';
                          }, 1000);
                      });
              });
      })
  }


  return {
    all: all,
    getById: getById,
    add: add
  };
 }();

 export { postsController }