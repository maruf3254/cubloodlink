import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../Helpers/axiosInstance";


// =====================================================
// INITIAL STATE
// =====================================================

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",

  role: localStorage.getItem("role") || "",

  data: JSON.parse(localStorage.getItem("data") || "{}"),
};


// =====================================================
// REGISTER USER
// =====================================================
// User automatically becomes donor after registration.
// Backend:
// POST /user/register
// =====================================================

export const createAccount = createAsyncThunk(
  "/auth/signup",
  async (data, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Please wait! Creating your account..."
    );

    try {
      const res = await axiosInstance.post(
        "/user/register",
        data
      );

      toast.success(
        res?.data?.message || "Registration successful",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Registration failed",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Registration failed",
        }
      );
    }
  }
);


// =====================================================
// LOGIN
// =====================================================
// Backend:
// POST /user/login
// =====================================================

export const login = createAsyncThunk(
  "/auth/login",
  async (data, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Please wait! Logging into your account..."
    );

    try {
      const res = await axiosInstance.post(
        "/user/login",
        data
      );

      toast.success(
        res?.data?.message || "Login successful",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Login failed",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Login failed",
        }
      );
    }
  }
);


// =====================================================
// LOGOUT
// =====================================================
// Backend:
// GET /user/logout
// =====================================================

export const logout = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Logging out..."
    );

    try {
      const res = await axiosInstance.get(
        "/user/logout"
      );

      toast.success(
        res?.data?.message || "Logout successful",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Logout failed",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Logout failed",
        }
      );
    }
  }
);


// =====================================================
// GET CURRENT USER
// =====================================================
// Backend:
// GET /user/me
// =====================================================

export const getUserData = createAsyncThunk(
  "/auth/user/me",
  async (_, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Fetching profile..."
    );

    try {
      const res = await axiosInstance.get(
        "/user/me"
      );

      toast.success(
        res?.data?.message ||
        "Profile fetched successfully",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Failed to fetch profile",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Failed to fetch profile",
        }
      );
    }
  }
);


// =====================================================
// UPDATE USER PROFILE
// =====================================================
// Backend:
// POST /user/update/:id
// =====================================================

export const updateUserData = createAsyncThunk(
  "/auth/user/update",
  async (data, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Updating changes..."
    );

    try {
      const res = await axiosInstance.post(
        `/user/update/${data.id}`,
        data
      );

      toast.success(
        res?.data?.message ||
        "Profile updated successfully",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Profile update failed",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Profile update failed",
        }
      );
    }
  }
);


// =====================================================
// CHANGE PASSWORD
// =====================================================
// Backend:
// POST /user/change-password
// =====================================================

export const changePassword = createAsyncThunk(
  "/auth/user/changePassword",
  async (userPassword, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Changing password..."
    );

    try {
      const res = await axiosInstance.post(
        "/user/change-password",
        userPassword
      );

      toast.success(
        res?.data?.message ||
        "Password changed successfully",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Password change failed",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Password change failed",
        }
      );
    }
  }
);


// =====================================================
// FORGOT PASSWORD
// =====================================================
// Backend:
// POST /user/reset
// =====================================================

export const forgetPassword = createAsyncThunk(
  "auth/user/forgetPassword",
  async (email, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Please wait! Sending reset email..."
    );

    try {
      const res = await axiosInstance.post(
        "/user/reset",
        {
          email,
        }
      );

      toast.success(
        res?.data?.message ||
        "Password reset link sent",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Failed to send reset email",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Failed to send reset email",
        }
      );
    }
  }
);


// =====================================================
// RESET PASSWORD
// =====================================================
// Backend:
// POST /user/reset/:resetToken
// =====================================================

export const resetPassword = createAsyncThunk(
  "/auth/user/resetPassword",
  async (data, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Please wait! Resetting your password..."
    );

    try {
      const res = await axiosInstance.post(
        `/user/reset/${data.resetToken}`,
        {
          password: data.password,
        }
      );

      toast.success(
        res?.data?.message ||
        "Password reset successfully",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Password reset failed",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Password reset failed",
        }
      );
    }
  }
);



export const verifyStudent = createAsyncThunk(
  "/auth/student/verify",

  async (data, { rejectWithValue }) => {
    const loadingMessage = toast.loading(
      "Verifying student information..."
    );

    try {
      const res = await axiosInstance.post(
        "/student/verify",
        {
          student_id: data.student_id.trim(),
          name: data.name.trim(),
        }
      );

      toast.success(
        res?.data?.message ||
          "Student verified successfully",
        {
          id: loadingMessage,
        }
      );

      return res?.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Student verification failed",
        {
          id: loadingMessage,
        }
      );

      return rejectWithValue(
        error?.response?.data || {
          message: "Student verification failed",
        }
      );
    }
  }
);


// =====================================================
// AUTH SLICE
// =====================================================

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {},

  extraReducers: (builder) => {

    // =================================================
    // REGISTER
    // =================================================

    builder.addCase(
      createAccount.fulfilled,
      (state, action) => {
        const user = action?.payload?.user;

        if (!user) return;

        localStorage.setItem(
          "data",
          JSON.stringify(user)
        );

        localStorage.setItem(
          "role",
          user?.role || "USER"
        );

        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        state.data = user;

        state.role = user?.role || "USER";

        state.isLoggedIn = true;
      }
    );


    // =================================================
    // LOGIN
    // =================================================

    builder.addCase(
      login.fulfilled,
      (state, action) => {
        const user = action?.payload?.user;

        if (!user) return;

        localStorage.setItem(
          "data",
          JSON.stringify(user)
        );

        localStorage.setItem(
          "role",
          user?.role || "USER"
        );

        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        state.data = user;

        state.role = user?.role || "USER";

        state.isLoggedIn = true;
      }
    );


    // =================================================
    // GET CURRENT USER
    // =================================================

    builder.addCase(
      getUserData.fulfilled,
      (state, action) => {
        const user = action?.payload?.user;

        if (!user) return;

        localStorage.setItem(
          "data",
          JSON.stringify(user)
        );

        localStorage.setItem(
          "role",
          user?.role || "USER"
        );

        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        state.data = user;

        state.role = user?.role || "USER";

        state.isLoggedIn = true;
      }
    );


    // =================================================
    // UPDATE USER
    // =================================================

    builder.addCase(
      updateUserData.fulfilled,
      (state, action) => {
        const user = action?.payload?.user;

        if (!user) return;

        localStorage.setItem(
          "data",
          JSON.stringify(user)
        );

        localStorage.setItem(
          "role",
          user?.role || "USER"
        );

        state.data = user;

        state.role = user?.role || "USER";
      }
    );


    // =================================================
    // LOGOUT
    // =================================================

    builder.addCase(
      logout.fulfilled,
      (state) => {
        localStorage.removeItem("data");
        localStorage.removeItem("role");
        localStorage.removeItem("isLoggedIn");

        state.data = {};

        state.role = "";

        state.isLoggedIn = false;
      }
    );
  },
});


export const { } = authSlice.actions;

export default authSlice.reducer;