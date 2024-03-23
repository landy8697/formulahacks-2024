
const express = require("express");
const MongoClient = require("mongodb")
const database = require('./connect_db');
// const propauth = require('./prop_authenticate');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongostuff();

async function mongostuff(){
// MongoDB connection URI


// Call the connectToMongoDB function to establish the connection
database.connectToMongoDB();
database.clear_db();
id = Math.floor(Math.random() * 10000000000000);
await database.add_user(id);

await database.add_run(id, JSON.parse(fs.readFileSync("object_structures/example_loc_array.json")), 1);

database.close_db();


// propauth.propel_init();

}