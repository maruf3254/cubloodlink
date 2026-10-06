import React from "react";
import { Link } from "react-router-dom";
import { FiDroplet, FiMapPin, FiPhone, FiUser, FiLock } from "react-icons/fi";
import { formatDate } from "./FormParts";

export default function DonorCard({ donor }) {
  return (
    <article className="flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 shrink-0 rounded-full bg-slate-100 text-[#1E293B] flex items-center justify-center">
          <FiUser size={22} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-lg text-[#1E293B] truncate">
            {donor.name || "Anonymous donor"}
          </h3>
          <p className="text-sm text-[#334155] truncate">{donor.dept}</p>
        </div>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#B91C1C] text-white text-sm font-bold">
          <FiDroplet size={14} />
          {donor.blood_group}
        </span>
      </div>

      <dl className="mt-4 space-y-1.5 text-sm text-[#334155]">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-slate-400" />
          <dd>{donor.location}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Last donation</dt>
          <dd>{formatDate(donor.last_donation_date) || "Not recorded"}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Total donations</dt>
          <dd>{donor.total_donations ?? 0}</dd>
        </div>
      </dl>

      <div className="mt-4 pt-4 border-t border-slate-200">
        {donor.phone_visible && donor.mobile ? (
          <a
            href={`tel:${donor.mobile}`}
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#B91C1C] text-white font-semibold hover:bg-[#991B1B] transition"
          >
            <FiPhone />
            {donor.mobile}
          </a>
        ) : (
          <div className="text-sm text-[#334155]">
            <p className="flex items-center gap-2 font-semibold text-[#1E293B]">
              <FiLock /> Phone number is private
            </p>
            <p className="mt-1">
              This donor prefers to be contacted through an admin.{" "}
              <Link to="/contact" className="text-[#B91C1C] font-semibold hover:underline">
                Contact admin
              </Link>
            </p>
          </div>
        )}
      </div>
    </article>
  );
}