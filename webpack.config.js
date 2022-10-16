const path = require('path') // módulo do node para identificar o caminho dos arquivos

module.exports = {
  entry: './js/script.js', // arquivo que gera a build

  output: {
    filename: 'main.js', // arquivo gerado à partir do script.js que terá os códigos compactados pelo Webpack.
    path: path.resolve(__dirname, './dist/')
  },
  mode: 'production', // valor padrão do modo
  // mode: 'development',
  // watch: true // verifica se há alteração nos arquivos
}
// rodar npx webpack no terminal