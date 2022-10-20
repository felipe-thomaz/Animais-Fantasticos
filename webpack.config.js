const path = require('path') // módulo do node para identificar o caminho dos arquivos

module.exports = {
  entry: './js/script.js', // arquivo que gera a build

  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js', // arquivo gerado à partir do script.js que terá os códigos compactados pelo Webpack.
  },
  
  // mode: 'production', // valor padrão do modo
  // mode: 'development',
  // watch: true // verifica se há alteração nos arquivos
  module: {
    rules:[
      {
        test: /\.js$/, // o cifrão pega somente o final no caso o ".js"
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
  ],
  }
}
// rodar "npx webpack" no terminal