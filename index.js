const express = require('express')
var exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"public")))
app.use("/",require(path.join(__dirname,"routes/webroute.js")))

app.listen(port, () => {
  console.log(`Example app listening on port www.localhost:${port}`)
})