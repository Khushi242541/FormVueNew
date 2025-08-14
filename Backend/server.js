const express = require("express");
const {MongoClient}= require ("mongodb");
const cors = require ("cors");

const app = express();
app.use(cors());
app.use(express.json());
///////////////////////////////////////////right till above///////////////////////////////

// MongoDB connection details
const url = "mongodb://127.0.0.1:27017";
const dbName = "Form_Data";
const client = new MongoClient(url);
async function startServer() {
  try {
    console.log('to see if my request come here after history::: ');
    const client = new MongoClient(url);
    await client.connect();
    console.log("✅ MongoDB Connected");

    const db = client.db("Form_Data");
    newusers = db.collection("newusers");

    // Start server only after DB connection
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  } catch (err) {
    console.error("❌ Failed to connect to DB", err);
  }
}
// Routes
app.post("/api/newusers", async (req, res) => {
  try {
    await newusers.insertOne(req.body);
    res.json({ message: "User saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/api/getusers", async (req, res)=>{
  console.log('1::: ', 1);
  await client.connect(); 
  console.log('::: ');
  const db = client.db("Form_Data");
  let arr=[1,2,43.5];
  console.log('::: ',typeof arr);

  let getuser =  await db.collection("newusers").find().toArray();
  // console.log('getuser::: ', getuser);
  // console.log('getuser typeof ::: ',typeof getuser);
  res.send(getuser)
})

startServer("Server started on port:5000");

 app.listen(5000, () => console.log("🚀 Server running on port 5000"));
