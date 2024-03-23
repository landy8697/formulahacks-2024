const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const uri = MONGO_URI_HERE;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
});

const myDB = client.db("RacingHack");
myColl = myDB.collection("Users");
leaderboard = myDB.collection("Leaderboard");

async function connectToMongoDB() {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

async function add_user(userid){
    const data = JSON.parse(fs.readFileSync("object_structures/user.json"));
    //data.userdata.username = "Josh";
    data.id = userid;
    data.userdata.username = "Josh";
    await myColl.insertOne(data);
}

async function add_run(userid, run, ourRouteID){
    console.log("USERID " + userid);
    obj_user = await myColl.findOne({"id": userid});
    const trip = JSON.parse(fs.readFileSync("object_structures/trips.json"));
    trip.routeID = ourRouteID;
    theID = Math.floor(Math.random() * 100000);
    trip.tripID = theID;
    trip.start_time = run[0].t;
    trip.end_time = run[run.length - 1].t;
    trip.start_pos = run[0];
    trip.end_pos = run[run.length - 1];
    trip.locations = run;
    trip.total_time = trip.end_time - trip.start_time;
    //console.log(obj_user.userdata['trips']);

    await obj_user.userdata['trips'].push(trip);
    await myColl.replaceOne({'id' : userid}, obj_user);

    crun = JSON.parse(fs.readFileSync("object_structures/condensed_run.json"));
    crun.tripID = theID;
    crun.routeID = ourRouteID;
    crun.username = obj_user.userdata['username'];
    crun.date = new Date();
    crun.userid = userid;
    var total = 0;
    for(var i = 0; i < run.length; i++) {
        total += run[i].speed;
    }
    crun.average_speed = total / run.length;
    crun.time = trip.total_time;

    await leaderboard.insertOne(crun);

}

async function clear_db(){
    await myDB.collection('Users').drop();
    await myDB.createCollection('Users');
}


async function close_db(){
    await client.close();
}

async function instructions(){
    await run().catch(console.dir);
    await add_user("1234").catch(console.dir);
    await add_user("2435").catch(console.dir);
    //await clear_db();

    await close_db();
}


// instructions();
module.exports = {
    connectToMongoDB,
    close_db,
    clear_db,
    add_run,
    add_user
}
// run().catch(console.dir);
// add_user("1234").catch(console.dir);

//clear_db();