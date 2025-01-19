const { z } = require("zod");

// ====creating an object  schema========
const signUpValidatorSchema = z
  .object({
    email: z
      .string({ required_error: "Email must be required" })
      .trim()
      .email({ message: "Invalid email " }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 character" })
      .max(1024, { message: "Password can't be greater than 1024 character" }),
    cPassword: z
      .string({ required_error: "Confirm password must be same as password" })
      .min(6, { message: "Password must be at least 6 character" })
      .max(1024, { message: "Password can't be greater than 1024 character" }),
  })
  .superRefine(({ password, cPassword }, ctx) => {
    if (password !== cPassword) {
      ctx.addIssue({
        code: "custom",
        message: "The password and confirm password did not match.",
      });
    }
  });

module.exports = signUpValidatorSchema;
