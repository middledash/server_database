const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    user_id: Schema.Types.ObjectId, // to connect to the Sensors
    username: { type: String, required: true },
    first_name: String,
    last_name: String,
    email: String,
    password: { type: String, required: true },
    sensors: [{ type: Schema.Types.ObjectId, ref: "Sensor" }], // this is the join
}
)

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;