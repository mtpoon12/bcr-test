const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

const fixtureSchema = new mongoose.Schema({
  // Define your schema here
});

const Fixture = mongoose.model('Fixture', fixtureSchema);

app.post('/api/upload', async (req, res) => {
  try {
    // Process and store data
    res.status(200).send('Data has been uploaded successfully');
  } catch (error) {
    res.status(500).send('Error in uploading data');
  }
});

app.get('/api/search', async (req, res) => {
  const query = req.query.query;
  try {
    const fixtures = await Fixture.find({ team: new RegExp(query, 'i') });
    res.json(fixtures);
  } catch (error) {
    res.status(500).send('Error searching data');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));