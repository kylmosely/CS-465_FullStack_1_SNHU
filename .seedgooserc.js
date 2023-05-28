// .seedgooserc.js
module.exports = {
    modelBaseDirectory: 'app_server/models', // model directory name
    models: ['*.js', '!db.js'], // model matcher
    data: 'data', // data directory name
    db: 'mongodb://localhost:27020/travlr' // db connection url
  };