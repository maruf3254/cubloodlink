import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { FiActivity, FiLock, FiPower } from "react-icons/fi";

import {
  changeDonorPassword,
  deactivateDonor,
  updateDonorAvailability,
} from "../../Redux/Slices/DonorSlice";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-slate-300 bg-[#F8FAFC] text-[#334155] outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C]";

export default function DonorAccountActions() {
  const dispatch = useDispatch();
  const { donor, passwordUpdating } = useSelector((state) => state.donor);

  const [pwd, setPwd] = useState({
    oldPassword: "",
    newPassword: "",
    confirm: "",
  });
  const [confirmingDeactivate, setConfirmingDeactivate] = useState(false);
  const [deactivatePassword, setDeactivatePassword] = useState("");

  if (!donor) return null;

  if (!donor.is_active) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mt-6">
        <p className="font-semibold text-[#1E293B]">
          Your donor account is deactivated.
        </p>
        <p className="text-sm text-[#334155] mt-1">
          Contact an admin if you want to become a donor again.
        </p>
      </div>
    );
  }

  function handleToggleAvailability() {
    dispatch(updateDonorAvailability({ available: !donor.available }));
  }

  async function handlePasswordSubmit(e) {
    e.preventDefault();

    if (pwd.newPassword.length < 8) {
      toast.error("New password must be at least 8 characters");
      return;
    }

    if (pwd.newPassword !== pwd.confirm) {
      toast.error("Passwords do not match");
      return;
    }

    const result = await dispatch(
      changeDonorPassword({
        // Donors registered before passwords existed have no old password.
        oldPassword: pwd.oldPassword || undefined,
        newPassword: pwd.newPassword,
      })
    );

    if (changeDonorPassword.fulfilled.match(result)) {
      setPwd({ oldPassword: "", newPassword: "", confirm: "" });
    }
  }

  async function handleDeactivate(e) {
    e.preventDefault();

    if (!deactivatePassword) {
      toast.error("Enter your donor password to continue");
      return;
    }

    const result = await dispatch(
      deactivateDonor({ password: deactivatePassword })
    );

    if (deactivateDonor.fulfilled.match(result)) {
      setDeactivatePassword("");
      setConfirmingDeactivate(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Availability + Password */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <FiActivity size={22} className="text-[#B91C1C]" />
            <div>
              <p className="font-semibold text-[#1E293B]">Availability</p>
              <p className="text-sm text-[#334155]">
                {donor.available
                  ? "Seekers can find you in search."
                  : "You are hidden from search."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleToggleAvailability}
            className="shrink-0 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-300 text-[#1E293B] hover:bg-slate-50 transition"
          >
            {donor.available ? "Make unavailable" : "Make available"}
          </button>
        </div>

        <form onSubmit={handlePasswordSubmit} className="pt-6 space-y-4">
          <div className="flex items-center gap-3">
            <FiLock size={22} className="text-[#B91C1C]" />
            <h3 className="font-bold text-[#1E293B]">Donor password</h3>
          </div>

          <div>
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Current password"
              value={pwd.oldPassword}
              onChange={(e) => setPwd({ ...pwd, oldPassword: e.target.value })}
              className={inputClass}
            />
            <p className="mt-1 text-xs text-[#334155]">
              Leave empty if you have never set a donor password.
            </p>
          </div>

          <input
            type="password"
            autoComplete="new-password"
            placeholder="New password (at least 8 characters)"
            value={pwd.newPassword}
            onChange={(e) => setPwd({ ...pwd, newPassword: e.target.value })}
            className={inputClass}
          />

          <input
            type="password"
            autoComplete="new-password"
            placeholder="Confirm new password"
            value={pwd.confirm}
            onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
            className={inputClass}
          />

          <button
            type="submit"
            disabled={passwordUpdating}
            className="w-full py-3 rounded-lg font-semibold bg-[#B91C1C] text-white hover:bg-[#991B1B] disabled:opacity-60 transition"
          >
            {passwordUpdating ? "Saving..." : "Save password"}
          </button>
        </form>
      </div>

      {/* Deactivate */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-3">
          <FiPower size={22} className="text-[#B91C1C]" />
          <h3 className="font-bold text-[#1E293B]">Deactivate donor account</h3>
        </div>

        <p className="text-sm text-[#334155]">
          You will no longer appear in donor search. You cannot undo this
          yourself.
        </p>

        {!confirmingDeactivate ? (
          <button
            type="button"
            onClick={() => setConfirmingDeactivate(true)}
            className="mt-5 px-5 py-2.5 rounded-lg font-semibold border border-[#B91C1C] text-[#B91C1C] hover:bg-red-50 transition"
          >
            Deactivate account
          </button>
        ) : (
          <form onSubmit={handleDeactivate} className="mt-5 space-y-3">
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Enter your donor password"
              value={deactivatePassword}
              onChange={(e) => setDeactivatePassword(e.target.value)}
              className={inputClass}
            />

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setConfirmingDeactivate(false);
                  setDeactivatePassword("");
                }}
                className="flex-1 py-2.5 rounded-lg font-semibold border border-slate-300 text-[#1E293B] hover:bg-slate-50 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 py-2.5 rounded-lg font-semibold bg-[#B91C1C] text-white hover:bg-[#991B1B] transition"
              >
                Confirm deactivate
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}