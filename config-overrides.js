const { override, fixBabelImports } = require('customize-cra');
 module.export = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
 );
