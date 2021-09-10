const { getAll } = require("../services/category.service");

module.exports.index = async (req, res) => {
  try {
    const categories = await getAll();
    return res.json({ categories });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.show = async (req, res) => {};
