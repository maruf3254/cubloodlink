import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiDroplet, FiCheckCircle, FiArrowLeft } from "react-icons/fi";

import Layout from "../../Layout/Layout";
import { verifyStudent, registerDonor } from "../../Redux/Slices/DonorSlice";
import {
  BLOOD_GROUPS, Field, Toggle, inputClass, primaryBtn, cardClass,
  isValidBdMobile, normalizeMobile,
} from "../../Components/Donor/FormParts";

const emptyDonor = {
  mobile: "",
  password: "",
  confirm_password: "",
  blood_group: "",
  last_donation_date: "",
  total_donations: 0,
  location: "",
  available: true,
  name_visible: true,
  phone_visible: false,
};

export default function DonorRegistration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verifying, registering } = useSelector((state) => state.donor);

  const [verifyData, setVerifyData] = useState({ student_id: "", name: "" });
  const [student, setStudent] = useState(null);
  const [form, setForm] = useState(emptyDonor);

  const today = new Date().toISOString().slice(0, 10);

  function handleVerifyChange(e) {
    setVerifyData({ ...verifyData, [e.target.name]: e.target.value });
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleVerify(e) {
    e.preventDefault();

    if (!verifyData.student_id.trim() || !verifyData.name.trim()) {
      toast.error("Please enter Student ID and Name");
      return;
    }

    const result = await dispatch(
      verifyStudent({
        student_id: verifyData.student_id.trim(),
        name: verifyData.name.trim(),
      })
    );

    if (verifyStudent.fulfilled.match(result)) {
      setStudent(result.payload.student);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (!form.mobile || !form.blood_group || !form.location.trim()) {
      toast.error("Please fill mobile number, blood group and location");
      return;
    }
    if (!isValidBdMobile(form.mobile)) {
      toast.error("Enter a valid mobile number, e.g. 01XXXXXXXXX");
      return;
    }
    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (form.password !== form.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }
    if (Number(form.total_donations) < 0) {
      toast.error("Total donations cannot be negative");
      return;
    }

    const result = await dispatch(
      registerDonor({
        student_id: student.student_id,
        name: student.name,
        dept: student.dept,

        mobile: normalizeMobile(form.mobile),
        password: form.password,
        blood_group: form.blood_group,
        last_donation_date: form.last_donation_date || null,
        total_donations: Number(form.total_donations) || 0,
        location: form.location.trim(),
        available: form.available,
        name_visible: form.name_visible,
        phone_visible: form.phone_visible,
      })
    );

    if (registerDonor.fulfilled.match(result)) {
      navigate("/donor/dashboard");
    }
  }

  function resetVerification() {
    setStudent(null);
    setVerifyData({ student_id: "", name: "" });
    setForm(emptyDonor);
  }

  return (
    <Layout>
      <section className="min-h-screen bg-[#F8FAFC] px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-[#B91C1C] text-[#F8FAFC]">
              <FiDroplet size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              Become a Blood Donor
            </h1>
            <p className="mt-2 text-[#334155]">
              Use your CU account to register as a donor and help save lives.
            </p>
          </div>

          <div className={`${cardClass} p-5 md:p-8`}>
            {!student ? (
              <form onSubmit={handleVerify} className="space-y-5">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#1E293B]">
                    Step 1: Verify your student information
                  </h2>
                  <p className="mt-1 text-sm text-[#334155]">
                    Enter your university Student ID and registered name. It must be your own ID.
                  </p>
                </div>

                <Field label="Student ID">
                  <input
                    name="student_id"
                    value={verifyData.student_id}
                    onChange={handleVerifyChange}
                    placeholder="Enter your Student ID"
                    className={inputClass}
                  />
                </Field>

                <Field label="Full name">
                  <input
                    name="name"
                    value={verifyData.name}
                    onChange={handleVerifyChange}
                    placeholder="Enter your registered name"
                    className={inputClass}
                  />
                </Field>

                <button type="submit" disabled={verifying} className={primaryBtn}>
                  {verifying ? "Verifying..." : "Verify student"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-5">
                <div className="p-4 rounded-lg border border-[#B91C1C] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-3">
                    <FiCheckCircle className="text-[#B91C1C]" size={20} />
                    <h2 className="font-bold text-[#1E293B]">Student verified</h2>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      ["Student ID", student.student_id],
                      ["Name", student.name],
                      ["Department", student.dept],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className="text-xs text-[#334155]">{label}</p>
                        <p className="font-semibold text-[#1E293B]">{value}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={resetVerification}
                    className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#B91C1C] hover:text-[#1E293B]"
                  >
                    <FiArrowLeft size={16} /> Change student information
                  </button>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#1E293B]">
                    Step 2: Donor information
                  </h2>
                </div>

                <Field label="Mobile number" hint="Example: 01XXXXXXXXX">
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className={inputClass}
                  />
                </Field>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field
                    label="Donor password"
                    hint="Needed to change this password or deactivate your donor account."
                  >
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                      placeholder="At least 8 characters"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Confirm password">
                    <input
                      type="password"
                      name="confirm_password"
                      value={form.confirm_password}
                      onChange={handleChange}
                      autoComplete="new-password"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Blood group">
                    <select
                      name="blood_group"
                      value={form.blood_group}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select blood group</option>
                      {BLOOD_GROUPS.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Current location" hint="Example: Chattogram, Panchlaish">
                    <input
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="Where can you donate?"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Last donation date" hint="Leave empty if you have never donated.">
                    <input
                      type="date"
                      name="last_donation_date"
                      max={today}
                      value={form.last_donation_date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Total donations">
                    <input
                      type="number"
                      min="0"
                      name="total_donations"
                      value={form.total_donations}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="space-y-3">
                  <Toggle
                    name="available"
                    checked={form.available}
                    onChange={handleChange}
                    title="Available for donation"
                    description="Let seekers find you when they need blood."
                  />
                  <Toggle
                    name="name_visible"
                    checked={form.name_visible}
                    onChange={handleChange}
                    title="Show my name"
                    description="If off, your name does not appear in search results."
                  />
                  <Toggle
                    name="phone_visible"
                    checked={form.phone_visible}
                    onChange={handleChange}
                    title="Show my phone number"
                    description="If off, seekers cannot see your number and must contact an admin."
                  />
                </div>

                <button type="submit" disabled={registering} className={primaryBtn}>
                  {registering ? "Registering..." : "Register as donor"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}