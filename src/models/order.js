import { Schema, model, models } from "mongoose";

const OrderScheme = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  productName: {
    type: String,
    required: [true, "productName is required"],
  },
  productUrl: {
    type: String,
    required: [true, "productUrl is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
  shipfee: {
    type: Number,
    required: [true, "shipfee is required"],
  },
  totalPrice: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "canceled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  phone: {
    type: String,
    required: [true, "phone is required"],
  },
  note: {
    type: String,
    default: "",
  },
});

const Order = models.Order || model("Order", OrderScheme);
export default Order;
