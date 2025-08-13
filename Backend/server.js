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
let db;
async function startServer() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log("✅ MongoDB Connected");

    const db = client.db(Form_Data);
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
app.get("api/newusers", async (req, res)=>{
  const newusers=await newusers.findall();
  res.json(newusers)
})

startServer();

 app.listen(5000, () => console.log("🚀 Server running on port 5000"));
