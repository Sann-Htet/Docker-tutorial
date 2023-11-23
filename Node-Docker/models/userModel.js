const mangoose = require("mangoose")

const userSchema = new mangoose.Schema({
    username: {
        type: String,
        require: [true, 'User must have a username'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'User must have a password'],
    }
})

const User = mangoose.model("User", userSchema);

module.exports = User;