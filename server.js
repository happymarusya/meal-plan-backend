const express = require('express');
const app = express();
const mongoose = require('mongoose');

const routes = require('./MealRoutes');

const cors = require('cors');

require('dotenv').config();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

const PORT = 7000 || process.env.port;

app.listen(PORT, () => {
    console.log(`I AM LISTENNING ON PORT ${PORT}`)
})

//imyamaria   Yvoo1B2V9agl3SMX
//mongodb+srv://imyamaria:<password>@cluster0.s9f3pmc.mongodb.net/?retryWrites=true&w=majority