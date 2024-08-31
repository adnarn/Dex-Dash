const express = require('express');
const signupRoute = require('./routes/signup');
const bodyParser = require('body-parser');
const createAdminAccount = require('./scripts/admin');
const cors = require('cors');
const loginRoute = require('./routes/login');
const ItemModel = require('./models/ItemModel');
const UserModel = require('./models/user');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use('/user', signupRoute);
app.use('/auth', loginRoute);

////////////////////////////////// API Routes ///////////////////////////////

// Route to get all items
app.get('/api/items', (req, res) => {
    ItemModel.find({})
        .then(items => res.json(items))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/addItem', (req, res) => {
    ItemModel.create(req.body)
        .then(item => res.json(item))
        .catch(error => res.status(500).json({ error: error.message }));
});

// Route to delete an item by ID
app.delete('/api/items/:id', (req, res) => {
    const id = req.params.id;
    ItemModel.findByIdAndDelete(id)
        .then(() => res.json({ message: 'Item deleted successfully' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Route to get an item by ID
app.get('/getItem/:id', (req, res) => {
    const id = req.params.id;
    ItemModel.findById(id)
        .then(item => res.json(item))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Route to update an item by ID
app.put('/updateItem/:id', (req, res) => {
    const id = req.params.id;
    const { name, price } = req.body;

    ItemModel.findByIdAndUpdate(id, { name, price }, { new: true })
        .then(item => res.json(item))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Search route to search for items by name
app.get('/api/search', (req, res) => {
    const query = req.query.q; // get the search query from the request

    ItemModel.find({ name: { $regex: query, $options: 'i' } }) // case-insensitive search
        .then(items => res.json(items))
        .catch(err => res.status(500).json({ error: err.message }));
});

////////////////////////////////// Deployment ///////////////////////////////

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname1, 'client', 'dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, 'client', 'dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running successfully!');
    });
}

////////////////////////////////// Deployment ///////////////////////////////

app.listen(PORT, () => {
    console.log(`Hello, the server is running at port ${PORT}`);
    console.log(path.resolve(__dirname1, 'client', 'dist', 'index.html'));
    createAdminAccount();
});
