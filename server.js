'use strict'; 

const express = require('express'); 
/* Server-side rendering */
function angularRouter(req, res) {

  /* Server-side rendering */
  res.render('index', { req, res });

}

const app = express();
var port = process.env.PORT || 3000;

/* Root route before static files, or it will serve a static index.html, without pre-rendering */
app.get('/', angularRouter);

/* Serve the static files generated by the CLI (index.html, CSS? JS, assets...) */
app.use(express.static('${__dirname}/dist/' + process.env.APP));
 
/* Direct all routes to index.html, where Angular will take care of routing */
app.get('*', angularRouter);

app.listen(port, function () {
  console.log('Expresslistening on port ' + port + '!');
});