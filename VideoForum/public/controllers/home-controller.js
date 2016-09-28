import { templates } from '../scripts/templates.js';

let homeController = function () { 
    function all(context) {
    templates.get('home')
      .then(function(template) {
        $('#content').html(template());
      });
  }

  return {
    all: all
};
 }();

 export { homeController }