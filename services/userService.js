exports.getAllUsers = () => {
  return "Fetching all users";
};

exports.addUser = (userData) => {
  return "Adding a new user";
};

exports.getUserById = (id) => {
  if (!id || isNaN(id)) {
    const error = new Error("Invalid user ID");
    error.status = 400;
    throw error;
  }
  return `Fetching user with ID: ${id}`;
};
