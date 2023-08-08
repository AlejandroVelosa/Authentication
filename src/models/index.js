const EmailCode = require("./EmailCode");
const User = require("./User");

//EmailCode --> UserId
User.hasOne(EmailCode); //userId
EmailCode.belongsTo(User);
