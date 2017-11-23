const template = require("./templates/index.pug");
const beautify_html = require('js-beautify').html;
const locals = {
    title: 'Welcome'
};
const html = template(locals);
module.exports = beautify_html(html);