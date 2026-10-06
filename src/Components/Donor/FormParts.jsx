import React from "react";

export const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const inputClass =
  "w-full px-4 py-3 rounded-lg border border-slate-300 bg-[#F8FAFC] text-[#334155] outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] disabled:opacity-60";

export const primaryBtn =
  "w-full py-3 rounded-lg font-semibold bg-[#B91C1C] text-white hover:bg-[#991B1B] disabled:opacity-60 disabled:cursor-not-allowed transition";

export const cardClass = "bg-white border border-slate-200 rounded-xl shadow-sm";

// Accepts 01XXXXXXXXX, +8801XXXXXXXXX, with spaces or dashes. Stored as 01XXXXXXXXX.
export const normalizeMobile = (v) => v.replace(/[\s-]/g, "").replace(/^\+?88/, "");
export const isValidBdMobile = (v) => /^01[3-9]\d{8}$/.test(normalizeMobile(v));

export const formatDate = (d) => (d ? new Date(d).toLocaleDateString("en-GB") : null);

export function Field({ label, hint, children }) {
  return (
    <div>
      <label className="block mb-2 font-semibold text-[#334155]">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-[#334155]">{hint}</p>}
    </div>
  );
}

export function Toggle({ name, checked, onChange, title, description }) {
  return (
    <label className="flex items-center justify-between gap-4 p-4 rounded-lg bg-[#F8FAFC] cursor-pointer">
      <div>
        <p className="font-semibold text-[#1E293B]">{title}</p>
        <p className="text-sm text-[#334155]">{description}</p>
      </div>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 accent-[#B91C1C] cursor-pointer shrink-0"
      />
    </label>
  );
}

export function Centered({ children }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">{children}</div>
  );
}