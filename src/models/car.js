"use strict";

const { Schema, model } = require("mongoose");

const CarSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    regPlate: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    occupiedList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reservation",
        required: true,
      },
    ],
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updaterId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "cars", timestamps: true }
);

module.exports = model("Car", CarSchema);
