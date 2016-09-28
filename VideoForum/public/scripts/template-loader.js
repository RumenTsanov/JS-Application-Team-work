/**
 * Created by Antoan on 9/26/2016.
 */
const temlateLoader = (()=>{
    const cache = {};

    function get(templateName) {
        return new Promise((resolve,reject)=> {
            if(cache[templateName]){
                resolve(cache[templateName])
            } else {
                $.get(`/templates/${templateName}.handlebars`)
                    .done((data)=> {
                        let templatData = Handlebars.compile(data);
                        cache[templateName] = templatData;
                        resolve(templatData);
                    })
                    .fail(reject);
            }
        })
    }
    return {
        get
    }
})();

export { temlateLoader }