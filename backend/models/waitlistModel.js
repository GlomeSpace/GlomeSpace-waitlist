import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const emailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      default: uuidv4(),
    },
    unsubscribed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Email = mongoose.model("Email", emailSchema);

export { Email };
