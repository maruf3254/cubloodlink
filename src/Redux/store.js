import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
// import CourseSliceReducer from "./Slices/CourseSlice";
// import LectureSliceReducer from "./Slices/LectureSlice"
import StatSliceReducer from "./Slices/StatSlice";
import donorReducer from "./Slices/DonorSlice";
// import examSReducer from "./Slices/examsSlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    // course: CourseSliceReducer,
    // razorpay: RazorpaySliceReducer,
    // lecture: LectureSliceReducer,
    stat: StatSliceReducer,
    donor: donorReducer,
    // exams: examSReducer,
  },
  devTools: true,
});

export default store;
