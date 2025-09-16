const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


// Serve static files from the "public" directory
app.use(express.static(path.join(dirname)));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'EntranceSlide.html'));
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:${port}");
});