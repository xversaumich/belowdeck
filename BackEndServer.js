const express = require("express");
const path = require("path");
const app = express();

app.use(express.json()); //for JSON POST requests
app.use(express.static(path.join(__dirname, "Public")));  //Serve everything in the project folder from /public

//Save player progress

let PlayerSave = {
    level: 1,
    HP: 30
};

app.post("/api/save-progress", (req, res) => {
    PlayerSave = req.body;
    console.log("Saved: ", PlayerSave);
    res.json({status: "ok"});
    
});
//end of save player progress

//Load player progress
app.get("/api/load-progress", (req, res) => {
    res.json(PlayerSave);
});
//end of load player progress

//Save combat messages
let SavedMessages = [];

app.post("/api/save-message", (req, res) => {
    SavedMessages.push(req.body.message);
    res.json({status: "ok"});
});

app.get("/api/messages", (req, res) => {
    res.json(SavedMessages);
});
//end of save combat messages

//serve index.html as homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "index.html"));
});




// Render.com will use PORT env variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));

//left off at: ✔️ Let me give you the fixed + deployment-ready BackEndServer.js