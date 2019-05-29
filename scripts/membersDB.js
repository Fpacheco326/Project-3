const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Memberss collection and inserts the Memberss below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactmemberslist"
);

const memberSeed = [
  {
    date: new Date(Date.now())
  
    
  }
];

db.Members
  .remove({})
  .then(() => db.Members.collection.insertMany(MembersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
