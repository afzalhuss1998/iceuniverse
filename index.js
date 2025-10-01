const connectDB = require("./db");

(async () => {
  const client = await connectDB();
  const db = client.db("iceuniverse"); // apna DB ka naam

  console.log("📂 Using Database:", db.databaseName);

  const usersCollection = db.collection("users");

  // Test insert
  await usersCollection.insertOne({ name: "Test User", role: "Tester" });
  console.log("🎉 Test document inserted successfully!");

  await client.close();
})();
