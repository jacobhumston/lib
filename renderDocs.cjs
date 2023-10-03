const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

if (process.argv[2] === 'web') {
    jsdoc2md.render({ files: ['web/*.js', 'web/classes/*.js', 'web/functions/*.js'] }).then(function (out) {
        if (!fs.existsSync('docs/web')) fs.mkdirSync('docs/web');
        fs.writeFileSync(
            'docs/web/README.md',
            'This documentation is auto generated, for more info, please visit: [https://github.com/jacobhumston/lib](https://github.com/jacobhumston/lib)\n\n' +
                out
        );
        console.log('Completed! Characters: ' + out.length);
    });
} else {
    jsdoc2md.render({ files: ['src/*.js', 'src/classes/*.js', 'src/functions/*.js'] }).then(function (out) {
        fs.writeFileSync(
            'docs/README.md',
            'This documentation is auto generated, for more info, please visit: [https://github.com/jacobhumston/lib](https://github.com/jacobhumston/lib)\n\n' +
                out
        );
        console.log('Completed! Characters: ' + out.length);
    });
}
