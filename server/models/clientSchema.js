import mongoose from "mongoose";
import validator from "validator";

const clientSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: { type: String, required: true },
  messages: {
    type: [String],
    default: [],
  },
});

// Save Message
clientSchema.methods.Messagesave = async function (message) {
  try {
    this.messages.push(message);
    await this.save();
    return message;
  } catch (error) {
    console.log(error);
  }
};

const Client = mongoose.model.Client || mongoose.model("Client", clientSchema);

export default Client;
