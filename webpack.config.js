//Configuración
//Trae path lo cuaĺ nos permite saber donde nos estamos moviendo en el proeycto
const path = require('path');
//Añadir el archivo necesario para trabajar con HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const CopyWebpackPlugin = requiere('copy-webpack-plugin');

//Creación del modulo que se exportara donde viene cada configuración de lo que va a suceder
// modulo para exportar que viene cada configuracion
// module es un objeto
module.exports ={
    entry: './src/index.js',  //ahi vive el codigo que incial yy de ahi partira
    //output es  donde se pondra el proyecto ya copilado y estructurado listo para manadarse aproducción
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                // valores que queremos filtrar ... reges o rules
                test: /\.js?$/,
                //excluir el node_module
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
        {
            inject: true,
            template: './public/index.html',
            flename: './index.html',
        }
        ),
        new CopyPlugin({
            patterns: [
              { 
                from: './src/stylos/styles.css', 
                to: ''
            },
            ],
        }),
    ],
};