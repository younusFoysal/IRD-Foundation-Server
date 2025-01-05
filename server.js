const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// database file
const dbPath = path.join(__dirname, 'dua_main.sqlite');

// Connection to database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Failed to connect to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});


// Testing connction
app.get('/data', (req, res) => {
    const query = 'SELECT * FROM category';

    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});



// Start the server
app.listen(PORT, () => {
    console.log(`IRD Foundation Server is running on http://localhost:${PORT}`);
});
