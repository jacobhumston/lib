const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md.render({ files: ['src/*.js', 'src/classes/*.js', 'src/functions/*.js'] }).then(function (out) {
    fs.writeFileSync('docs/README.md', out);
    console.log('Completed! Characters: ' + out.length);
});
