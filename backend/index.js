import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Mongoose schema and model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
});
const Contact = mongoose.model('Contact', ContactSchema);

// API route to receive form data
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received form data:', req.body);
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: 'Contact saved!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Serve React build files (for production)
app.use(express.static(path.join(__dirname, '../build')));
app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:3000`);
});