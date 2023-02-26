const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function removeFileExtension(pageNameList) {
  // tmp code
  const foo = path.parse(pageNameList[0]).name;
  console.log(foo);

  for (let i = 0; i < pageNameList.length; i++) {
    const indexOfComma = pageNameList[i].indexOf('.');
    pageNameList[i] = pageNameList[i].slice(0, indexOfComma);
  }
  return pageNameList;
}

module.exports = function functiongetHtmlWebpackPluginList() {
  const list = [];
  const pageNameList = removeFileExtension(fs.readdirSync('./src/html/pages'));

  pageNameList.forEach((pageName) => {
    list.push(
      new HtmlWebpackPlugin({
        template: `./src/html/pages/${pageName}.html`,
        filename: `${pageName}.html`,
        chunks: [`${pageName}`],
        minify: false,
      })
    );
  });

  return list;
};
