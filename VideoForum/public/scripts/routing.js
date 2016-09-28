/**
 * !!!!!!! Тhis file is not currently in use! !!!!!!!
 */
import { data } from './data.js'
import  { templates } from './templates.js'

var router = (() => {
    let navigo;
    function init() {

        navigo = new Navigo(null,false);
        navigo.on('/threads/:id',(params) => {
            Promise.all([data.threads.getById(params.id),tl.get('messages')])
                .then(([data,template]) => {
                    console.log(data);
                    $('#content').append(template(data))
                }).catch(console.log)
        })
            .on('/threads',() => {
                Promise.all([data.threads.get(),tl.get('threads')])
                    .then(([data,template]) => {
                        console.log(data);
                        $('#content').html(template(data))
                    }).catch(console.log)
            })
            .on('',()=>{
                $('#content').html('');
            })
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