const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello world! This is releaseversioningtest.');
});

// index.js
console.log("Test commit for release workflow");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
