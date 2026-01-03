import { useState, useRef, useEffect } from "react";

export default function YearPicker({ value, onChange, placeholder = "YYYY" }) {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(value || new Date().getFullYear());
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-[75%]">
      {/* INPUT */}
      <input
        readOnly
        value={value || ""}
        placeholder={placeholder}
        onClick={() => setOpen(!open)}
        className="w-full px-[20px] py-[5px] border rounded-md cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* DROPDOWN */}
      {open && (
        <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg p-4 z-50">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setYear(y => y - 1)}
              className="text-xl text-gray-500 hover:text-black"
            >
              ‹
            </button>

            <span className="text-lg font-semibold">{year}</span>

            <button
              onClick={() => setYear(y => y + 1)}
              className="text-xl text-gray-500 hover:text-black"
            >
              ›
            </button>
          </div>

          <button
            onClick={() => {
              onChange(year);
              setOpen(false);
            }}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md
                       hover:bg-blue-600 transition"
          >
            Select Year
          </button>
        </div>
      )}
    </div>
  );
}
