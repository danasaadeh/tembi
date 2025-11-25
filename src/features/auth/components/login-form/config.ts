import * as yup from "yup";

// Regex for alphanumeric passwords (digits and letters, 6-20 characters)
const alphanumericPasswordRegex = /^[a-zA-Z0-9]{6,20}$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

export const loginFormSchemaValidation = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email or phone number is required")
    .test(
      "is-email-or-phone",
      "Must be a valid email or phone number",
      (value) => {
        if (!value) return false;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),

  password: yup
    .string()
    .required("Password is required")
    .test(
      "password-strength",
      "Password must be at least 6 characters long and can contain letters and numbers.",
      (value) => {
        if (!value) return false;
        return alphanumericPasswordRegex.test(value); // Check for alphanumeric password
      }
    )
    .max(20, "Password cannot exceed 20 characters"),
});
