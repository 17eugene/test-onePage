import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "The name must not contain numbers!")
    .min(2, "Minimum 2 letters!")
    .max(60, "No more than 60 letters!")
    .required("Required field! Enter you name."),

  email: yup
    .string()
    .email("Not valid format!")
    .min(2, "Minimum 2 symbols!")
    .max(100, "No more than 100 symbols!")
    .required("Required field! Enter you e-mail address."),

  phone: yup
    .string()
    .required("Phone number is required!")
    .matches(
      /^[+]{0,1}380([0-9]{9})$/,
      "Enter the phone number in the required format!"
    ),
});
