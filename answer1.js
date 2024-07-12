const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

function getUserById(id, callback) {
  setTimeout(() => {
    const user = mockDatabase.find((user) => user.id === id);
    if (user) {
      callback(null, user);
    } else {
      callback(new Error("User not found"), null);
    }
  }, 2000);
}
// getUserById(1, (err, user) => {
//   if (err) {
//     console.log("User not found")
//   }else{
//     console.log(user)
//   }
// })

function processUserData(user, callback) {
  setTimeout(() => {
    user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1);
    callback(null, user);
  }, 1500);
}

function executeAndProcess(userId) {
  getUserById(userId, (err, user) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Show User:", user);
      processUserData(user, (err, processedUser) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log("Processed user data:", processedUser);
        }
      });
    }
  });
}

executeAndProcess(1);
