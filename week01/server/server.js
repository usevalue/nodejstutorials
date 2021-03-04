const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

const clientPath = path.join(__dirname, "/../client/");
console.log(clientPath);

app.set('view engine', 'ejs');
app.set('views', path.join(clientPath,"views/"));


app.get('/', (req, res) => {
    res.render('index');
});

app.use(express.static(path.join(clientPath,'static/')));


app.listen(4000);
