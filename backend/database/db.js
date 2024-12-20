const mongoose = require('mongoose');
const connectToDB = async()=>{
try{
await mongoose.connect(process.env.MONGO_URI);
console.log('Mongodb successfully conected');
}catch(e){

    console.error('Mongodb connection failed:', e.message);
    process.exit(1);
};
}

module.exports = connectToDB

