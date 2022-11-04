const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  phoneNumber: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  email:{
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  summ: {
    type: mongoose.SchemaTypes.String,
    required: true,
  }
});

module.exports = mongoose.model("registration", RegistrationSchema);
