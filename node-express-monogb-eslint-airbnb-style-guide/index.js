const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', (req, res) => {
  const { id } = req.query; // eslint error
  if (id) {
    res.send(`User id is ${id}`);
  } else {
    res.send('User id is not found');
  }
});

app.get('/health', (req, res) => {
  res.send('Server health is fine');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
