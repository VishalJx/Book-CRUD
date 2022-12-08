require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}.mongodb.net/Bookstore?retryWrites=true&w=majority`
).then(()=>console.log('DB Connected'));