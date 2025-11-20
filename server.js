//mostly just test stuff in here to make sure render can actually run the web service. Will need to do actual server.js in the future

const express = require("express");
const path = require("path");

const app = express();

// Needed to parse JSON POST bodies
app.use(express.json());

// Serve static files like HTML, CSS, JS, images, audio, etc.
app.use(express.static(path.join(__dirname)));

// Example GET endpoint (replace with your own features)
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Example POST endpoint (replace with your own features)
app.post("/api/submit", (req, res) => {
  const data = req.body;
  res.json({ received: data, status: "ok" });
});

// Use PORT provided by Render OR default to 3000 locally
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});