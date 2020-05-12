const express = require('express');
const app = express();
const expressEJs = require('express-ejs-layouts');

//set ejs layout
app.use(expressEJs);

//setting viewengine
app.set('view engine', 'ejs');

//setup static
app.use(express.static(__dirname + '/assests'));

//pages
app.get('/', (req, res) => {
  res.render('index');
});

//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
