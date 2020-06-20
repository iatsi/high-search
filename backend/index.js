process.on('uncaughtException', function (err) {
    console.error(err.stack);
    console.log('Node NOT Exiting...');
   });

  const cluster = require('cluster');
  const numCPUs = require('os').cpus().length;
  const express    = require('express');
  const app        = express();
  const server = require('http').createServer(app);
  const bodyParser = require('body-parser');
  const mongoose = require('mongoose');
  const cors = require('cors');


  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
  
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {


    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    mongoose.connect('mongodb+srv://demo:demo@cluster0-4jtur.mongodb.net/demo', { useNewUrlParser: true });
    
    
    var port = 8080;
    
    app.use(require('./routes'));
    
    server.listen(port);
   
    console.log(`Worker ${process.pid} started`);
  }


  