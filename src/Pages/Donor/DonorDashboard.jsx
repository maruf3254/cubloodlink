import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FiDroplet, FiUser, FiPhone, FiMapPin, FiCalendar, FiEdit, FiEye, FiEyeOff,
  FiCheckCircle, FiXCircle, FiActivity, FiSearch, FiBookOpen,
} from "react-icons/fi";

import Layout from "../../Layout/Layout";
import { getMyDonorProfile } from "../../Redux/Slices/DonorSlice";
import DonorAccountActions from "../../Components/Donor/DonorAccountActions";
import { Centered, cardClass, formatDate } from "../../Components/Donor/FormParts";

export default function DonorDashboard() {
  const dispatch = useDispatch();
  const { donor, loading, error } = useSelector((state) => state.donor);

  useEffect(() => {
    dispatch(getMyDonorProfile());
  }, [dispatch]);

  if (loading && !donor) {
    return (
      <Layout>
        <Centered>
          <p className="text-[#334155] text-lg font-semibold">Loading donor information...</p>
        </Centered>
      </Layout>
    );
  }

  if (!donor) {
    return (
      <Layout>
        <Centered>
          <div className={`${cardClass} p-8 text-center max-w-md w-full`}>
            <FiDroplet size={42} className="mx-auto mb-4 text-[#B91C1C]" />
            <h2 className="text-xl font-bold text-[#1E293B]">Donor profile not found</h2>
            <p className="text-[#334155] mt-2">{error || "You are not registered as a donor."}</p>
            <Link
              to="/donor/register"
              className="inline-block mt-5 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-5 py-2.5 rounded-lg font-semibold transition"
            >
              Register as donor
            </Link>
          </div>
        </Centered>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#F8FAFC] px-4 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#B91C1C] text-white p-3 rounded-xl">
                <FiDroplet size={26} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#1E293B]">Donor dashboard</h1>
                <p className="text-[#334155] mt-1">Manage your blood donor information</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                to="/donor/find"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white text-[#1E293B] hover:bg-slate-50 px-5 py-2.5 rounded-lg font-semibold transition"
              >
                <FiSearch /> Find donors
              </Link>
              {donor.is_active && (
                <Link
                  to="/donor/profile/edit"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E293B] hover:bg-[#0F172A] text-white px-5 py-2.5 rounded-lg font-semibold transition"
                >
                  <FiEdit /> Edit profile
                </Link>
              )}
            </div>
          </div>

          {/* Availability banner */}
          <div className={`${cardClass} p-5 mb-6 flex items-center justify-between gap-4`}>
            <div className="flex items-center gap-3">
              <FiActivity size={24} className="text-[#B91C1C]" />
              <div>
                <h3 className="font-bold text-[#1E293B]">Donation availability</h3>
                <p className="text-sm text-[#334155]">
                  {!donor.is_active
                    ? "Your donor account is deactivated."
                    : donor.available
                    ? "You are currently available for blood donation."
                    : "You are currently unavailable for blood donation."}
                </p>
              </div>
            </div>

            <span className="px-4 py-2 rounded-full font-semibold text-sm bg-slate-100 text-[#1E293B] shrink-0">
              {!donor.is_active ? "Deactivated" : donor.available ? "Available" : "Unavailable"}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Information */}
            <div className={`lg:col-span-2 ${cardClass} p-6`}>
              <h2 className="text-xl font-bold text-[#1E293B] mb-6">Donor information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InfoItem icon={<FiUser />} label="Name" value={donor.name} />
                <InfoItem icon={<FiDroplet />} label="Blood group" value={donor.blood_group} highlight />
                <InfoItem icon={<FiBookOpen />} label="Student ID" value={donor.student_id} />
                <InfoItem icon={<FiUser />} label="Department" value={donor.dept} />
                <InfoItem icon={<FiPhone />} label="Mobile" value={donor.mobile} />
                <InfoItem icon={<FiMapPin />} label="Location" value={donor.location} />
                <InfoItem
                  icon={<FiCalendar />}
                  label="Last donation"
                  value={formatDate(donor.last_donation_date) || "No donation recorded"}
                />
                <InfoItem
                  icon={<FiDroplet />}
                  label="Total donations"
                  value={`${donor.total_donations || 0} times`}
                />
              </div>
            </div>

            {/* Privacy */}
            <div className={`${cardClass} p-6`}>
              <h2 className="text-xl font-bold text-[#1E293B] mb-6">Visibility</h2>

              <div className="space-y-5">
                <SettingRow
                  on={donor.available}
                  onIcon={<FiCheckCircle size={21} />}
                  offIcon={<FiXCircle size={21} />}
                  title="Availability"
                  onText="Seekers can find you"
                  offText="Hidden from search"
                />
                <SettingRow
                  on={donor.name_visible}
                  onIcon={<FiEye size={21} />}
                  offIcon={<FiEyeOff size={21} />}
                  title="Name"
                  onText="Your name is visible"
                  offText="Shown as anonymous donor"
                />
                <SettingRow
                  on={donor.phone_visible}
                  onIcon={<FiEye size={21} />}
                  offIcon={<FiEyeOff size={21} />}
                  title="Phone number"
                  onText="Visible to seekers"
                  offText="Hidden, seekers contact an admin"
                />
              </div>
            </div>
          </div>

          <DonorAccountActions />
        </div>
      </div>
    </Layout>
  );
}

function InfoItem({ icon, label, value, highlight }) {
  return (
    <div className="border border-slate-200 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[#B91C1C]">{icon}</span>
        <span className="text-sm text-[#334155]">{label}</span>
      </div>
      <p className={`font-semibold ${highlight ? "text-[#B91C1C] text-lg" : "text-[#1E293B]"}`}>
        {value || "Not provided"}
      </p>
    </div>
  );
}

function SettingRow({ on, onIcon, offIcon, title, onText, offText }) {
  return (
    <div className="flex items-center gap-3 border-t border-slate-200 pt-5 first:border-0 first:pt-0">
      <span className={on ? "text-[#1E293B]" : "text-slate-400"}>{on ? onIcon : offIcon}</span>
      <div>
        <p className="font-semibold text-[#1E293B]">{title}</p>
        <p className="text-sm text-[#334155]">{on ? onText : offText}</p>
      </div>
    </div>
  );
}