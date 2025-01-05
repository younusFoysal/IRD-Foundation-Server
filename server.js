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


// Get all categories
app.get('/categories', (req, res) => {
    const { cat } = req.query;

    // base query
    let query = 'SELECT * FROM category WHERE 1=1';
    const params = [];

    if (cat) {
        query += ' AND cat_id = ?';
        params.push(cat);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error fetching categories:', err.message);
            res.status(500).json({ error: 'Failed to fetch categories' });
        } else {
            res.json(rows);
        }
    });
});

// API to get all subcategories for a category
app.get('/subcategories', (req, res) => {
    const { cat } = req.query;

    let query = 'SELECT * FROM sub_category WHERE 1=1';
    const params = [];

    if (cat) {
        query += ' AND cat_id = ?';
        params.push(cat);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error fetching subcategories:', err.message);
            res.status(500).json({ error: 'Failed to fetch subcategories' });
        } else {
            res.json(rows);
        }
    });
});





// Start the server
app.listen(PORT, () => {
    console.log(`IRD Foundation Server is running on http://localhost:${PORT}`);
});
