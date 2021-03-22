const { program } = require('commander');
const pkgJson = require('../package.json');
const { compile, run } = require('./app');
const defaults = require('./defaults');

program.option('-o --out <path>', 'path where save the html', defaults.out);
program.option('--cwd <path>', 'current working directory', defaults.cwd);
program.option('run', 'run wiki');
program.version(pkgJson.version);

program.parse(process.argv);

if (program.args.length > 0) {
  run();
} else {
  compile();
}
