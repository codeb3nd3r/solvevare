const express = require('express');
const path = require('path');
// const Contact = require('./mongo'); // Import the schema
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3001;

app.use(cors({
  origin: "*",
  methods: "*"
}))
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// POST endpoint to receive the contact form data
app.post('/contact', async (req, res) => {
  try {
    const {name, email, message} = req.body
    console.log(name, email, message)
    // const newContact = new Contact(req.body);
    // await newContact.save();
    res.status(201).send('Contact saved');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Catch-all handler for any other request that is not handled above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Frontend/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
