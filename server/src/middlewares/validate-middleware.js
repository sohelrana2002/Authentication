const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // console.log(err, "err");

    res.status(400).json({
      message: err?.issues[0]?.message,
    });
  }
};

module.exports = validate;
