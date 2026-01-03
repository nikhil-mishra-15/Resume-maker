import { useState, useRef, useEffect } from "react";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sept", "Oct", "Nov", "Dec",
];

export default function MonthYearPicker({ value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(
    value ? Number(value.split(", ")[1]) : new Date().getFullYear()
  );

  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-[75%]">
      {/* INPUT */}
      <input
        readOnly
        value={value}
        placeholder={placeholder}
        onClick={() => setOpen(!open)}
        className="w-full px-[20px] py-[5px] border rounded-md cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* DROPDOWN */}
      {open && (
        <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg p-4 z-50">
          {/* YEAR */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setYear(y => y - 1)}>‹</button>
            <span className="font-semibold">{year}</span>
            <button onClick={() => setYear(y => y + 1)}>›</button>
          </div>

          {/* MONTHS */}
          <div className="grid grid-cols-4 gap-2 text-sm">
            {MONTHS.map(m => (
              <button
                key={m}
                onClick={() => {
                  onChange(`${m}, ${year}`);
                  setOpen(false);
                }}
                className={`py-2 rounded-full transition
                  ${value?.startsWith(m)
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 hover:scale-115 ease-in-out duration-300"
                  }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
