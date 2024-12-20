
const jwt =require("jsonwebtoken"); 
const authMiddleware = (req, res, next)=>{
const authHeader = req.headers['authorization'];
console.log("authheader"+authHeader);
const token = authHeader && authHeader.split(" ")[1];
// myarry[      2]

if(!token){
    return res.status(401).json({
        sucxess : false,
        message : 'Access denied. No token provided'
    })
}
// decode the token 
try{
const decodeTokenInfo =jwt.verify(token, process.env.JWT_SECRET_KEY)
console.log(decodeTokenInfo);

req.userInfo = decodeTokenInfo;
next();   


}catch(error){
    return res.status(500).json({
        sucxess : false,
        message : 'Access denied. Invalid token'})
}
}
module.exports = authMiddleware 