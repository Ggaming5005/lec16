import * as yup from "yup";
import { useState } from "react";
import Confetti from "react-confetti"; // Import Confetti
import "./form.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showConfetti, setShowConfetti] = useState(false); // State for confetti

  // Validation schema
  const userSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "First name must be at least 3 characters")
      .required("First name is required"),
    lastName: yup
      .string()
      .min(3, "Last name must be at least 3 characters")
      .required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  async function validateForm(e) {
    e.preventDefault();

    const dataObject = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Validate form
      await userSchema.validate(dataObject, { abortEarly: false });
      setErrors({});
      setShowConfetti(true); // Show confetti on successful submission
      setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 seconds
    } catch (validationErrors) {
      // Map validation errors to fields
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      setShowConfetti(false); // Ensure confetti doesn't appear on errors
    }
  }

  return (
    <>
      {/* Render Confetti when showConfetti is true */}
      {showConfetti && <Confetti />}
      <form onSubmit={validateForm} className="form-container">
        {[
          {
            label: "First Name",
            value: firstName,
            onChange: setFirstName,
            error: errors.firstName,
            type: "text",
          },
          {
            label: "Last Name",
            value: lastName,
            onChange: setLastName,
            error: errors.lastName,
            type: "text",
          },
          {
            label: "Email Address",
            value: email,
            onChange: setEmail,
            error: errors.email,
            type: "email",
          },
          {
            label: "Password",
            value: password,
            onChange: setPassword,
            error: errors.password,
            type: "password",
          },
        ].map(({ label, value, onChange, error, type }, index) => (
          <div key={index} className="input-container">
            {error && (
              <img
                src="/images/icon-error.svg"
                alt="Error Icon"
                className="error-icon"
              />
            )}
            <input
              type={type}
              className={`form-input ${error ? "form-input--error" : ""}`}
              placeholder={label}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
            {error && <span className="form-error">{error}</span>}
          </div>
        ))}

        <button className="submit-button">CLAIM YOUR FREE TRIAL</button>
        <p className="terms-text">
          By clicking the button, you are agreeing to our{" "}
          <span className="terms-highlight">Terms and Services</span>
        </p>
      </form>
    </>
  );
};

export default Form;
