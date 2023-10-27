const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/Ismail_HOUSSNI', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});
app.listen(3001, () => {
   console.log("server is r  unnig on port 3001");
   console.log("Open your browser and hit url 'localhost:3000'");
});