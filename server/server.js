var http = require('http')
    ,app = require('./config/express'),
    dotenv = require('dotenv').config();

http.createServer(app).listen(process.env.PORT || 3000, function() {
    console.log('Servidor estutando na porta: ' + JSON.stringify(this.address()));
});