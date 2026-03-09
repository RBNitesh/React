const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// One to few relationship implementation
// const userSchema = new Schema({
//   username: String,
//   addresses: [
//     {
//       _id: false,
//       location: String,
//       city: String,
//     },
//   ],
// });

// const User = mongoose.model("User", userSchema);

// const addUser = async () => {
//   let user1 = new User({
//     username: "maxtern",
//     addresses: [
//       {
//         location: "abc street",
//         city: "Navi Mumbai",
//       },
//     ],
//   });
//   user1.addresses.push({
//     location: "Lal Singh Chadha chowk",
//     city: "Amritsahar",
//   });

//   let result = await user1.save();
//   console.log(result);
// };

// addUser();

// Implementation of One to Many RelationShips
const orderSchema = new Schema({
  item: String,
  price: Number,
});

// model
const Order = mongoose.model("Order", orderSchema);

// const addOrder = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 10 },
//     { item: "Tea", price: 10 },
//     { item: "Cake", price: 800 },
//   ]);
//   console.log(res);
// };

// addOrder();

const customerSchema = new Schema({
  name: String,
  // Got this type for ObjectId from mongoose populate section
  orders: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let order1 = await Order.findOne({ item: "Samosa" });
  let order2 = await Order.findOne({ item: "Tea" });
  let order3 = await Order.findOne({ item: "Cake" });

  let customer1 = {
    name: "Zyan",
    orders: [order1, order2, order3],
  };

  let res = await Customer.insertOne(customer1);
  console.log(res);
};

const addCustomer = async () => {
  let order1 = await Order.findOne({ item: "Samosa" });
  let order2 = await Order.findOne({ item: "Tea" });

  let customer2 = new Customer({
    name: "Jiva",
    orders: [order1, order2],
  });

  let res = await customer2.save();
  console.log(res);
};

// addCustomer();
