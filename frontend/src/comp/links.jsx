import React, { useState, useRef, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function Links() {
  const navigate = useNavigate();
  const { resume, setResume } = useOutletContext();

  const [open, setOpen] = useState(null); // which dropdown is open
  const ref = useRef(null);

  const SOCIALS = [
    "facebook",
    "twitter",
    "linkedin",
    "instagram",
    "github",
    "website",
  ];

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const updateLink = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      links: prev.links.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      ),
    }));
  };

  const addLink = () => {
    setResume((prev) => ({
      ...prev,
      links: [
        ...prev.links.map((l) => ({ ...l, open: false })),
        {
          id: crypto.randomUUID(),
          label: "",
          address: "",
          open: true,
        },
      ],
    }));
  };

  const deleteLink = (id) => {
    setResume((prev) => ({
      ...prev,
      links: prev.links.filter((link) => link.id !== id),
    }));
  };

  const toggle = (id) => {
    setResume((prev) => ({
      ...prev,
      links: prev.links.map((link) =>
        link.id === id ? { ...link, open: !link.open } : link
      ),
    }));
  };

  return (
    <div ref={ref}>
      {/* HEADER */}
      <div className="flex ml-[25px] gap-2 mb-[40px]">
        <img src="/social.png" width="20" />
        <p className="text-lg font-bold">Websites & Social Links</p>
      </div>

      {/* LINKS LIST */}
      <div>
        {resume.links.map((link) => (
          <div
            key={link.id}
            className="relative w-[80%] ml-[10px] mb-[25px]
                       rounded-lg p-4 shadow-[0px_10px_10px_rgba(0,0,0,0.15)]"
          >
            {/* COLLAPSED HEADER */}
            <div
              onClick={() => toggle(link.id)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="font-semibold">
                {link.label || "(Not Specified)"}
              </p>
              <span className="text-[23px] hover:scale-125 hover:duration-200 hover:ease-in-out">
                {link.open ? "🙂" : "🙃"}
              </span>
            </div>

            {/* OPEN CONTENT */}
            {link.open && (
              <div className="flex flex-row gap-6 mt-[30px]">
                {/* PLATFORM DROPDOWN */}
                <div className="relative w-[260px]">
                  <button
                    onClick={() =>
                      setOpen(open === link.id ? null : link.id)
                    }
                    className="w-full flex justify-between items-center
                               px-4 py-3 bg-gray-100 rounded-xl
                               border-b-2 border-blue-500
                               font-medium text-left"
                  >
                    {link.label || "Select platform"}
                    <svg
                      className={`w-4 h-4 transition-transform ${open === link.id ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {open === link.id && (
                    <div
                      className="absolute z-50 mt-2 bg-white
                                 rounded-xl shadow-lg
                                 max-h-[220px] overflow-y-auto"
                    >
                      {SOCIALS.map((label) => (
                        <button
                          key={label}
                          onClick={() => {
                            updateLink(link.id, "label", label);
                            setOpen(null);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-blue-50
                            ${link.label === label
                              ? "bg-blue-100 text-blue-600 font-medium"
                              : ""
                            }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* LINK INPUT */}
                <input
                  type="text"
                  placeholder="Link"
                  value={link.address}
                  onChange={(e) =>
                    updateLink(link.id, "address", e.target.value)
                  }
                  className="w-[50%] border-b outline-none
                             py-2 pl-[15px] rounded-lg"
                />
              </div>
            )}

            {/* DELETE BUTTON */}
            <div className="absolute -right-9 mb-[25px]">

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteLink(link.id);
                }}
                className="text-red-600 text-sm font-semibold hover:underline"
              >
                <img src='/delete.png' height="20px" width="25px" />
              </button>
            </div>
          </div>
        ))}


        {/* ADD LINK */}
        <button
          onClick={addLink}
          className="ml-[10px] mt-3 relative inline-block
                   font-semibold cursor-pointer text-black
                   before:content-['']
                   before:absolute before:left-0 before:top-0
                   before:w-[3px] before:h-0 before:bg-black
                   before:transition-all before:duration-300
                   hover:before:h-full px-[9px]"
        >
          + Add link
        </button>
      </div>
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/addmore")}
        className="flex justify-start ml-[10px] mt-[30px]
                   px-6 py-3 rounded-xl bg-black text-white
                   hover:bg-white hover:text-black
                   transition-all shadow-[0_2px_6px_rgba(0,0,0,0.95)]
                   font-semibold text-[15px]"
      >
        ← Back
      </button>
    </div>
  );
}

export default Links;
