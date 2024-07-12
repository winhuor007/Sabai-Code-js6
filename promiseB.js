const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

function getUserById(id) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      const user = mockDatabase.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        rejects(new Error("User not found"));
      }
    }, 2000);
  });
}

getUserById(2)
  .then((user) => console.log("User is:", user))
  .catch((error) => console.error(error));
