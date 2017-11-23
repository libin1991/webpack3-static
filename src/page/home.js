const template = require("./templates/home.pug");
const beautify_html = require('js-beautify').html;
const locals = {
    title: 'the is amazing233!'
};
const html = template(locals);
module.exports = beautify_html(html);