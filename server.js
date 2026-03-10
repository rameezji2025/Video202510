const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/location", (req, res) => {
  console.log("RAW BODY:", req.body);

  const { latitude, longitude, accuracy, timestamp } = req.body || {};

  if (typeof latitude !== "number" || typeof longitude !== "number") {
    console.log("Invalid location payload received");
    return res.status(400).json({
      ok: false,
      error: "Invalid payload"
    });
  }

  const mapUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`;

  console.log("Location received:");
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  console.log("Accuracy:", accuracy);
  console.log("Timestamp:", timestamp);
  console.log("Map URL:", mapUrl);

  res.json({
    ok: true,
    mapUrl
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
