import {Sequelize} from "sequelize";

const express = require("express");
const routes = require("./routes.ts")
const connectDB: Sequelize = require('./database/index.ts');

const app = express();
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cors());
app.use(routes);
async function connect() {
    try {
        await connectDB.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
