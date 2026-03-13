const getClasses = (req, res) => {
  res.json([
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Science" }
  ]);
};

module.exports = { getClasses };