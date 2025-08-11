const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection details
const url = "mongodb://127.0.0.1:27017";
const dbName = "Form_Data";
let users; // will store our collection

async function main() {
  const client = new MongoClient(url);
  await client.connect();
  console.log("✅ MongoDB Connected");

  const db = client.db(dbName);
  users = db.collection("users");

  app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
  });
}

// API route
app.post("/api/users", async (req, res) => {
  try {
    await users.insertOne(req.body);
    res.json({ message: "User saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start
main().catch(console.error);
