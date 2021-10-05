const mongoose = require("mongoose");
require("mongoose-type-email")

const paymentSchema = new mongoose.Schema(
  {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    transationId: {
        type: String,
        required: true,
    },
    
    plan: {
      type: String,
      enum:["monthly","yearly"],
      required:[true, "please select work, hobby or task specifically"]
    }
  },
  {
    timestamps: true,
  }

);
module.exports = mongoose.model("Payment", paymentSchema);
