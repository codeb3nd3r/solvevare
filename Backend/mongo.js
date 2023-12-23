const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB - Make sure to replace 'yourDatabaseName' with your actual database name
mongoose.connect('mongodb://localhost:27017/solvevare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema for the contact form
const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
