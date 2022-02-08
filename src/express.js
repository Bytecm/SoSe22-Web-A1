const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static("./public"));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// und starte den server und lausche auf Port 8080
app.listen(port, () => {
    console.log(`Best App in this world is listening on port ${port}`);
});
