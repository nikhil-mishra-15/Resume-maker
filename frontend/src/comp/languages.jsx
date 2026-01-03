import { useState, useRef, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const LEVELS = [
  "Native speaker",
  "Highly proficient",
  "Very good command",
  "Good working knowledge",
  "B2",
  "B1",
  "A2",
];

function Languages() {
  const navigate = useNavigate();
  const { resume, setResume } = useOutletContext();

  const [open, setOpen] = useState(null); // store language id
  const ref = useRef(null);

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

  const updateLanguage = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      languages: prev.languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    }));
  };

  const addLanguage = () => {
    setResume((prev) => ({
      ...prev,
      languages: [
        ...prev.languages.map((lang) => ({ ...lang, open: false })),
        {
          id: crypto.randomUUID(),
          name: "",
          level: "",
          open: true,
        },
      ],
    }));
  };


  const toggle = (id) => {
    setResume(prev => ({
      ...prev, languages: prev.languages.map(lang => lang.id === id ? { ...lang, open: !lang.open } : lang)
    }))
  }

  return (
    <div ref={ref}>
      {/* HEADER */}
      <div className="flex ml-[25px] gap-2 mb-[40px]">
        <img src="/language.svg" width="20" />
        <p className="text-lg font-bold">Languages</p>
      </div>

      {/* LANGUAGE LIST */}
      <div className="">
        {resume.languages.map((lang, index) => (
          <div key={lang.id} className="w-[90%] rounded-lg p-4 w-[80%] ml-[10px] shadow-[0px_10px_10px_rgba(0,0,0,0.15)] mb-[20px]">

            {/* HEADER (collapsed view) */}
            <div onClick={() => toggle(lang.id)} className="flex justify-between items-center cursor-pointer">
              <div>
                <p className='font-semibold'>
                  {lang.name || "(Not Specified)"}
                </p>
              </div>
              <span className="text-[23px] hover:scale-125 hover:duration-200 hover:ease-in-out">
                {lang.open ? "🙂" : "🙃"}
              </span>
            </div>

            {/* LANGUAGE NAME */}
            {lang.open && (
              <div className="flex flex-row gap-6">
                <input
                  type="text"
                  placeholder=" Language"
                  value={lang.name}
                  onChange={(e) =>
                    updateLanguage(lang.id, "name", e.target.value)
                  }
                  className="w-[50%] border-b outline-none py-2 pl-[15px] mt-[30px] h-[40%] rounded-lg"
                />

                {/* LEVEL DROPDOWN */}
                <div className="relative w-[260px]">
                  <button
                    onClick={() =>
                      setOpen(open === lang.id ? null : lang.id)
                    }
                    className="w-full flex justify-between items-center px-4 py-3
                           bg-gray-100 rounded-xl border-b-2 border-blue-500
                           font-medium text-left mt-[30px] h-[54%]"
                  >
                    {lang.level || "Select level"}
                    <svg
                      className={`w-4 h-4 transition-transform ${open === lang.id ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* DROPDOWN MENU */}
                  {open === lang.id && (
                    <div
                      className="absolute mt-2 bg-white rounded-xl shadow-lg
                             max-h-[220px] overflow-y-auto z-50"
                    >
                      {LEVELS.map((level) => (
                        <button
                          key={level}
                          onClick={() => {
                            updateLanguage(lang.id, "level", level);
                            setOpen(null);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-blue-50
                        ${lang.level === level
                              ? " bg-blue-100 text-blue-600 font-medium"
                              : ""
                            }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="absolute left-133 mb-[25px]">

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
      </div>

      {/* ADD LANGUAGE */}
      <button
        onClick={addLanguage}
        className="mt-9 relative inline-block font-semibold cursor-pointer text-black before:content-['']
         before:absolute
         before:left-0
         before:top-0
         before:w-[3px]
         before:h-0
         before:bg-black
         before:transition-all
         before:duration-300
         hover:before:h-full px-[9px]"
      >
        + Add Language
      </button>


      <button onClick={() => navigate("/inputform/addmore")} className="flex justify-start ml-[10px] mt-[30px] px-6 py-3 rounded-xl border-1 bg-black text-white 
hover:bg-white hover:text-black hover:border-white transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
 duration-200 font-semibold text-[15px]">← Back</button>
    </div>
  );
}

export default Languages;
