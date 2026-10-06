
import React from "react";
import { Link } from "react-router-dom";
import {
  FiHeart,
  FiSearch,
  FiInfo,
  FiPhone,
  FiArrowUp,
  FiShield,
  FiHome,
  FiActivity,
} from "react-icons/fi";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#1E293B] text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#fff] flex items-center justify-center">
               <img
                  src="https://i.imgur.com/OrFlE5I.png"
                  alt='CU BloodLink'
                  className='h-11 w-11 sm:h-12 sm:w-12 object-contain'
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  CU
                  <span className="text-[#B91C1C]">
                    BloodLink
                  </span>
                </h2>

                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400 mt-1">
                  University Blood Network
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              CU BloodLink is a university-focused blood donor network
              created to connect students with available blood donors
              and make blood support faster, easier and more accessible.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
              <FiHeart
                size={16}
                className="text-[#B91C1C]"
              />
              <span>
                Connecting donors. Saving lives.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                >
                   <FiHome size={15} />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/donors"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                >
                  <FiSearch size={15} />
                  Find Donor
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                >
                  <FiActivity size={15} />
                  How It Works
                </Link>
              </li>

              

              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                >
                  <FiInfo size={15} />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                >
                  <FiPhone size={15} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Important */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Important
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                >
                  
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-sm text-slate-400 hover:text-white transition"
                >
                  
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/donor-guidelines"
                  className="text-sm text-slate-400 hover:text-white transition"
                >
                  Donor Guidelines
                </Link>
              </li>
            </ul>

            <button
              onClick={handleBackToTop}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#B91C1C] transition"
            >
              Back to top
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= CREATOR CREDIT ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} CU BloodLink. All rights reserved.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 text-center">
              An initiative by{" "}
              <span className="font-semibold text-white">
                Imtiaz Jabed
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
