const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, './www')));

// und starte den server und lausche auf Port 8080
app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});