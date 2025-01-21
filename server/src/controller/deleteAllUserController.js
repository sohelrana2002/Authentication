const userSchema = require("../model/auth-model");

const deleteAllUser = async (req, res) => {
  try {
    const deleteAll = await userSchema.deleteMany();
    // console.log(deleteAll);

    if (deleteAll.acknowledged === true) {
      res.status(201).json({
        message: "Deleted all users successfully",
        document_delete: deleteAll.deletedCount,
      });
    }
  } catch (err) {
    console.error("internal server error.".err);

    res.status(500).json({
      message: "internal server error.",
      error: err,
    });
  }
};

module.exports = { deleteAllUser };
