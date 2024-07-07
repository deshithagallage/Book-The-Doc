const mongoose = require('mongoose');
DBLINK=`mongodb+srv://ABC:ABC@mern-crud.t4kweiu.mongodb.net/?retryWrites=true&w=majority&appName=mern-crud`
mongoose.connect(DBLINK);


mongoose.connection.on('connected', () => {
    console.log('MongoDB connected')
})

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err)
})

module.exports = mongoose;