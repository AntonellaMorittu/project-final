import { useState, useRef } from "react";
import { useModal } from "./ModalContext";
import { signup, login } from "../registration/authService";
import signUpImage from "/images/signUp.jpg";

export const AuthForm = ({ type, onSuccess }) => {
  const { hideModal } = useModal();
  const [formMode, setFormMode] = useState(type);
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("Listener");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      if (formMode === "signup") {
        await signup(username, password, role);
      } else {
        await login(username, password);
      }
      hideModal();
      onSuccess();
    } catch (error) {
      console.error("Authentication error:", error); // Debug log
      setError(
        error.response?.data?.message ||
          "An error occurred during the authentication process."
      );
    }
  };

  return (
    <div className="fixed inset-0 items-center justify-center bg-dark bg-opacity-50 z-50 flex">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl flex flex-col md:flex-row">
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-2xl font-bold text-primary hover:text-secondary"
          onClick={hideModal}
        >
          x
        </button>
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={signUpImage}
            alt="Sign up"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              aria-label="Username"
              placeholder="Username"
              ref={usernameInputRef}
              className="block w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              aria-label="Password"
              placeholder="Password"
              ref={passwordInputRef}
              className="block w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {formMode === "signup" && (
              <div className="mb-4">
                <label className="block mb-2 font-bold">Role</label>
                <select
                  aria-label="Select role"
                  value={role}
                  onChange={handleRoleChange}
                  className="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Listener">Listener</option>
                  <option value="Seeker">Seeker</option>
                </select>
              </div>
            )}
            <button
              type="submit"
              className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary w-full"
            >
              {formMode === "signup" ? "Sign Up" : "Log In"}
            </button>
          </form>
          <p className="mt-4 text-center md:text-left">
            {formMode === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              onClick={() =>
                setFormMode(formMode === "signup" ? "login" : "signup")
              }
              className="text-primary underline focus:outline-none"
            >
              {formMode === "signup" ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
