const fs = require('fs-extra');
const path = require('path');
const dist = path.resolve(__dirname, 'dist/');

(async () => {
  // Create package.json for npm package
  const pkg = await fs.readFile(path.resolve(__dirname, 'package.json'), 'utf8');
  const { scripts, devDependencies, ...others } = JSON.parse(pkg);
  const newpkg = {
    ...others,
    "main": "index.cjs.js",
    "module": "index.esm.js",
    "browser": "index.umd.js",
    "typings": "index.d.ts",
  };
  await fs.outputFile(path.join(dist, 'package.json'), JSON.stringify(newpkg, null, 2), 'utf8');
  await fs.copy(path.resolve(__dirname, 'README.md'), path.join(dist, 'README.md'));
})();
