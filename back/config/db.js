const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((db) => console.log(`DB ${process.env.MONGODB_URI} is connected`))
    .catch(err => console.log(err));
