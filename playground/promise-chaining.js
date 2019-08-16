require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5d49dc3ec44cf349cc4d98b9", { age: 35 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 35 });
//   })
//   .then(user => console.log(user))
//   .catch(e => console.log(e));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5d49f30b3e5e2935a825219c", 2)
  .then(count => console.log(count))
  .catch(e => console.log(e));
