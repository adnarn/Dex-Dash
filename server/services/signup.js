const User = require("../models/user");
const argon2 = require("argon2");

async function createUser(userData) {
    const {  email, name, password } = userData;

    const hashedPassword = await argon2.hash(password);

    const newUser = new User({
        email,
        name,
        password: hashedPassword,   
        role: 'customer'
    });

    const savedUser = await newUser.save();
    
    return savedUser;
}

module.exports = createUser;
