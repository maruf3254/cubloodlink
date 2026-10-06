import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../Helpers/axiosInstance";

// One helper so every thunk handles errors the same way.
const makeThunk = (type, request, { successToast = true, errorToast = true, fallback }) =>
    createAsyncThunk(type, async (arg, { rejectWithValue }) => {
        try {
            const response = await request(arg);
            if (successToast && response.data?.message) toast.success(response.data.message);
            return response.data;
        } catch (error) {
            const message = error.response?.data?.message || fallback;
            if (errorToast) toast.error(message);
            return rejectWithValue(message);
        }
    });

// POST /donor/verify-student  -> { student }
export const verifyStudent = makeThunk(
    "donor/verifyStudent",
    (data) => axiosInstance.post("/donor/verify-student", data),
    { fallback: "Student verification failed" }
);

// POST /donor/register
export const registerDonor = makeThunk(
    "donor/registerDonor",
    (data) => axiosInstance.post("/donor/register", data),
    { fallback: "Failed to register as donor" }
);

// GET /donor/profile  (no toast: the page shows the error itself)
export const getMyDonorProfile = makeThunk(
    "donor/getMyDonorProfile",
    () => axiosInstance.get("/donor/profile"),
    { successToast: false, errorToast: false, fallback: "Failed to load donor information" }
);

// PUT /donor/profile
export const updateDonorProfile = makeThunk(
    "donor/updateDonorProfile",
    (data) => axiosInstance.put("/donor/profile", data),
    { fallback: "Failed to update donor profile" }
);

// PUT /donor/availability  { available }
export const updateDonorAvailability = makeThunk(
    "donor/updateDonorAvailability",
    (data) => axiosInstance.put("/donor/availability", data),
    { fallback: "Failed to update availability" }
);

// PUT /donor/password  { oldPassword?, newPassword }
export const changeDonorPassword = makeThunk(
    "donor/changeDonorPassword",
    (data) => axiosInstance.put("/donor/password", data),
    { fallback: "Failed to update password" }
);

// DELETE /donor/deactivate  { password }
export const deactivateDonor = makeThunk(
    "donor/deactivateDonor",
    (data) => axiosInstance.delete("/donor/deactivate", { data }),
    { fallback: "Failed to deactivate donor" }
);

// GET /donor/search?blood_group=&dept=&location=
export const searchDonors = makeThunk(
    "donor/searchDonors",
    (params) => axiosInstance.get("/donor/search", { params }),
    { successToast: false, fallback: "Unable to load donors" }
);

const initialState = {
    donor: null,
    loading: false,
    verifying: false,
    registering: false,
    updating: false,
    passwordUpdating: false,
    error: null,

    results: [],
    total: 0,
    searching: false,
    searched: false,
    searchError: null,
};

const donorSlice = createSlice({
    name: "donor",
    initialState,

    reducers: {
        clearDonor: () => initialState,
    },

    extraReducers: (builder) => {
        builder
            .addCase(verifyStudent.pending, (s) => { s.verifying = true; })
            .addCase(verifyStudent.fulfilled, (s) => { s.verifying = false; })
            .addCase(verifyStudent.rejected, (s) => { s.verifying = false; })

            .addCase(registerDonor.pending, (s) => { s.registering = true; })
            .addCase(registerDonor.fulfilled, (s, a) => {
                s.registering = false;
                s.donor = a.payload.donor;
            })
            .addCase(registerDonor.rejected, (s) => { s.registering = false; })

            .addCase(getMyDonorProfile.pending, (s) => {
                s.loading = true;
                s.error = null;
            })
            .addCase(getMyDonorProfile.fulfilled, (s, a) => {
                s.loading = false;
                s.donor = a.payload.donor;
            })
            .addCase(getMyDonorProfile.rejected, (s, a) => {
                s.loading = false;
                s.donor = null;
                s.error = a.payload;
            })

            .addCase(updateDonorProfile.pending, (s) => { s.updating = true; })
            .addCase(updateDonorProfile.fulfilled, (s, a) => {
                s.updating = false;
                s.donor = a.payload.donor;
            })
            .addCase(updateDonorProfile.rejected, (s) => { s.updating = false; })

            .addCase(updateDonorAvailability.fulfilled, (s, a) => {
                if (s.donor) s.donor.available = a.payload.available;
            })

            .addCase(changeDonorPassword.pending, (s) => { s.passwordUpdating = true; })
            .addCase(changeDonorPassword.fulfilled, (s) => { s.passwordUpdating = false; })
            .addCase(changeDonorPassword.rejected, (s) => { s.passwordUpdating = false; })

            .addCase(deactivateDonor.fulfilled, (s) => {
                if (s.donor) {
                    s.donor.is_active = false;
                    s.donor.available = false;
                }
            })

            .addCase(searchDonors.pending, (s) => {
                s.searching = true;
                s.searchError = null;
            })
            .addCase(searchDonors.fulfilled, (s, a) => {
                s.searching = false;
                s.searched = true;
                s.results = a.payload.donors || [];
                s.total = a.payload.total ?? s.results.length;
            })
            .addCase(searchDonors.rejected, (s, a) => {
                s.searching = false;
                s.searched = true;
                s.results = [];
                s.searchError = a.payload;
            });
    },
});

export const { clearDonor } = donorSlice.actions;

export default donorSlice.reducer;