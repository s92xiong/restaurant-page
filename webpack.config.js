const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, // Codde below here is suspect
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader']
            },
        ]
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};