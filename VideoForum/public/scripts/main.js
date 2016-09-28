
import { data } from './data.js';
import  { templates } from './templates.js'
import  { homeController } from '../controllers/home-controller.js'
import  { postsController } from '../controllers/posts-controller.js'

let router = new Navigo(null, true);

router
    .on('', homeController.all)
    .on('/posts', postsController.all)
    .resolve();