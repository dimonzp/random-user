export const filter = (users, filterWord) => {
  try {
    const filterWordLower = filterWord.toLowerCase();
    const filteredUsers = users.filter((u) => {
      const first = u.name.first.toLowerCase();
      const last = u.name.last.toLowerCase();
      const isFind =
        first.startsWith(filterWordLower) ||
        last.toLowerCase().startsWith(filterWordLower) ||
        `${first} ${last}`.startsWith(filterWordLower) ||
        `${last} ${first}`.startsWith(filterWordLower);
      return isFind && u;
    });
    return filteredUsers;
  } catch (error) {
    console.log(error);
    return users;
  }
};
