const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/location", (req, res) => {
  console.log("Location received:", req.body);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});