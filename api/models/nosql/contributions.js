const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete"); // ----> borrado suave sin romper DB

const contributionsScheme = new mongoose.Schema(
  {
    user: {
        type: String, 
    },
    email: {
        type: String,
        unique: true,
    }, 
    phone: {
      type: String,
    },
    type: {
        type: String,
        enum: ["donación", "padrinazgo", "membresía","sponsoreo"],
        default: "definir", 
    },
    detail: {
      type: String,
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    total: {
        type: Number,
    },
    method: {
        type: String,
    },
    dog: {
      name: String,
        id: Number
    },
    isPending: {
      type: Boolean,
      default: false,
    },
    isPending: {
      type: Boolean,
      default: false,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// contributionsScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("contributions", contributionsScheme);