const express = require('express');
const app = express();

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API is work!'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));

// require connectDB
const connectDB = require('./config/db');

// memanggil konek database
connectDB()