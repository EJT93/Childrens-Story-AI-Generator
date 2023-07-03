const express = require('express');
const cors = require('cors');
const app = express();

// Enabling CORS
app.use(cors());

// Other middleware and routes might be here

app.listen(5000, function () {
  console.log('Your app is listening on port 5000!')
})
