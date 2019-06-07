require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');

const app = express()

app.use(express.json())  

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log('Database is connected')
  })
  .catch(err => console.log(err));

app.get('/api/inventory', ctrl.read)
app.post('/api/product', ctrl.create);
app.delete('/api/product/:id', ctrl.delete);
app.put('/api/product/:id', ctrl.update);






app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))