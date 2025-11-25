import * as yup from "yup";

// Reuse your existing regex
const alphanumericPasswordRegex = /^[a-zA-Z0-9]{6,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

export const signupFormSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .matches(emailRegex, "Please enter a valid email"),

  phone: yup
    .string()
    .trim()
    .required("Phone number is required")
    .matches(phoneRegex, "Enter a valid phone number"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      alphanumericPasswordRegex,
      "Password must be 6–20 characters and alphanumeric"
    ),
});
