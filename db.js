require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    if (!client.topology?.isConnected()) {
      await client.connect();
      console.log("✅ Connected to MongoDB Atlas");
    }
    return client;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
