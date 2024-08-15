const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ fruits: ['banana, apple, orange'] });
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
