import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiArrowLeft, FiSave, FiDroplet } from "react-icons/fi";

import Layout from "../../Layout/Layout";
import { getMyDonorProfile, updateDonorProfile } from "../../Redux/Slices/DonorSlice";
import {
  BLOOD_GROUPS, Field, Toggle, Centered, inputClass, primaryBtn, cardClass,
  isValidBdMobile, normalizeMobile,
} from "../../Components/Donor/FormParts";

export default function DonorEditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { donor, loading, updating } = useSelector((state) => state.donor);

  const [form, setForm] = useState(null);
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (!donor) dispatch(getMyDonorProfile());
  }, [dispatch, donor]);

  // Fill the form once the donor is loaded.
  useEffect(() => {
    if (donor && !form) {
      setForm({
        mobile: donor.mobile || "",
        blood_group: donor.blood_group || "",
        last_donation_date: donor.last_donation_date ? donor.last_donation_date.substring(0, 10) : "",
        total_donations: donor.total_donations ?? 0,
        location: donor.location || "",
        available: donor.available ?? true,
        name_visible: donor.name_visible ?? true,
        phone_visible: donor.phone_visible ?? false,
      });
    }
  }, [donor, form]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValidBdMobile(form.mobile)) {
      toast.error("Enter a valid mobile number, e.g. 01XXXXXXXXX");
      return;
    }
    if (!form.location.trim()) {
      toast.error("Location is required");
      return;
    }

    // The server identifies you from your login, so student_id is not sent.
    const result = await dispatch(
      updateDonorProfile({
        mobile: normalizeMobile(form.mobile),
        blood_group: form.blood_group,
        last_donation_date: form.last_donation_date || null,
        total_donations: Number(form.total_donations) || 0,
        location: form.location.trim(),
        available: form.available,
        name_visible: form.name_visible,
        phone_visible: form.phone_visible,
      })
    );

    if (updateDonorProfile.fulfilled.match(result)) navigate("/donor/dashboard");
  }

  if (loading || !donor || !form) {
    return (
      <Layout>
        <Centered>
          <p className="text-[#334155] font-semibold">Loading...</p>
        </Centered>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#F8FAFC] px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/donor/dashboard"
            className="inline-flex items-center gap-2 text-[#334155] hover:text-[#B91C1C] font-semibold mb-6"
          >
            <FiArrowLeft /> Back to dashboard
          </Link>

          <div className={`${cardClass} p-6 md:p-8`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#B91C1C] text-white p-3 rounded-xl">
                <FiDroplet size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1E293B]">Edit donor profile</h1>
                <p className="text-[#334155] text-sm mt-1">Update your donor information</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-5">
                <Field label="Student ID">
                  <input value={donor.student_id} disabled className={inputClass} />
                </Field>
                <Field label="Name">
                  <input value={donor.name} disabled className={inputClass} />
                </Field>
                <Field label="Department">
                  <input value={donor.dept} disabled className={inputClass} />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Mobile number">
                  <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} className={inputClass} />
                </Field>

                <Field label="Blood group">
                  <select name="blood_group" value={form.blood_group} onChange={handleChange} className={inputClass}>
                    {BLOOD_GROUPS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Location">
                  <input name="location" value={form.location} onChange={handleChange} className={inputClass} />
                </Field>

                <Field label="Last donation date">
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

              <div className="space-y-3 border-t border-slate-200 pt-6">
                <Toggle
                  name="available"
                  checked={form.available}
                  onChange={handleChange}
                  title="Available for donation"
                  description="Allow seekers to find you when they search for donors."
                />
                <Toggle
                  name="name_visible"
                  checked={form.name_visible}
                  onChange={handleChange}
                  title="Show my name"
                  description="If off, you appear as an anonymous donor."
                />
                <Toggle
                  name="phone_visible"
                  checked={form.phone_visible}
                  onChange={handleChange}
                  title="Show my phone number"
                  description="If off, seekers must contact an admin to reach you."
                />
              </div>

              <button type="submit" disabled={updating} className={`${primaryBtn} flex items-center justify-center gap-2`}>
                <FiSave />
                {updating ? "Saving..." : "Save changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}