import api from "../../axiosConfig";

const setAuthToken = (token) => {
  console.log("Setting auth token:", token); // Debug log
  localStorage.setItem("authToken", token);
};

export const signup = async (username, password, role) => {
  try {
    const response = await api.post("/users", { username, password, role });
    console.log("Signup response:", response); // Debug log

    const { accessToken } = response.data;
    console.log("Received access token:", accessToken); // Debug log

    setAuthToken(accessToken);
    return response.data;
  } catch (error) {
    console.error(
      "Signup failed:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await api.post("/sessions", { username, password });
    console.log("Logind resppnse:", response);
    const { token } = response.data;
    console.log("Received access token:", token); // Debug log
    setAuthToken(token);
    return response.data;
  } catch (error) {
    console.error(
      "Login failed:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("authToken");
    console.log("Retrieved auth token:", token); // Debug log
    if (!token) {
      throw new Error("No auth token found");
    }

    const response = await api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch profile:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

export const updateProfile = async (userData) => {
  try {
    const token = localStorage.getItem("authToken");
    const formData = new FormData();
    Object.keys(userData).forEach((key) => formData.append(key, userData[key]));

    const response = await api.put("/profile", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Failed to update profile:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
