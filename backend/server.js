require('dotenv').config();
const express = require('express');
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoutes = require("./routes/home-routes");
const cors = require('cors');
const User = require('./models/User');
const { loginUser, registerUser } = require('./controllers/auth-controller');
const userRoutes = require('./routes/userRoutes');
const { getAllUsers, getUserById} = require('./controllers/userData-controller');


connectToDB();

const app =express();
app.use(cors()); // Enable CORS for all origins
const PORT =process.env.PORT || 3000;

// middleware -> express.json

app.use(express.json());
app.use('/api/auth/register', registerUser );
app.use('/api/auth/login', loginUser );
app.use('/api/user/:id', getUserById);
app.use('/api/user', getAllUsers);
app.use('/api/home', homeRoutes);

app.listen(PORT, () =>{
    console.log(`Server is now listnening to port  ${PORT}`);

});