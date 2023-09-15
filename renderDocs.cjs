const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md.render({ files: ['src/*.js', 'src/classes/*.js', 'src/functions/*.js'] }).then(function (out) {
    fs.writeFileSync(
        'docs/README.md',
        'This documentation is auto generated, for more info, please visit: https://github.com/jacobhumston/lib\n\n' +
            out
    );
    console.log('Completed! Characters: ' + out.length);
});
