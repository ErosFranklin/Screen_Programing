const express = require("express");
const dotenv = require("dotenv");
const conectDataBase = require('./database/db');
const userRoute = require('./routes/User.router');
const Loginrouter = require("./routes/login.route");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
conectDataBase();
app.use(express.json());
app.use('/user', userRoute);
app.use('/login', Loginrouter);

app.listen(port,()=> console.log(`Servidor rodando na porta ${port}`))

