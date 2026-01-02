import React from 'react'
import { useOutletContext, useNavigate } from "react-router-dom";

function Links() {
  const navigate = useNavigate();
  const { resume, setResume } = useOutletContext();
  const links = resume.links;

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
        ...prev.links.map(link => ({ ...link, open: false })),
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
    setResume(prev => ({
      ...prev,
      links: prev.links.filter(link => link.id !== id)
    }));
  };

  const toggle = (id) => {
    setResume(prev => ({
      ...prev, links: prev.links.map(link => link.id === id ? { ...link, open: !link.open } : link)
    }))
  }
  return (
    <div>
      <div className="flex ml-[25px] gap-2 mb-[40px]">
        <img src="/social.png" width="20" />
        <p className="text-lg font-bold">Websites & Social Links</p>
      </div>

      <div className="">
        {resume.links.map((link) => (
          <div key={link.id} className="w-[90%] rounded-lg p-4 w-[80%] ml-[10px] shadow-[0px_10px_10px_rgba(0,0,0,0.15)]">

            {/* HEADER (collapsed view) */}
            <div onClick={() => toggle(link.id)} className="flex justify-between items-center cursor-pointer">
              <div>
                <p className='font-semibold'>
                  {link.name || "(Not Specified)"}
                </p>
              </div>
              <span className="text-lg">
                {link.open ? "▲" : "▼"}
              </span>
            </div>

            {/* LANGUAGE NAME */}
            {link.open && (
              <div className="flex flex-row gap-6">
                <input
                  type="text"
                  placeholder=" Language"
                  value={link.label}
                  onChange={(e) =>
                    updateLanguage(link.id, "label", e.target.value)
                  }
                  className="w-[50%] border-b outline-none py-2 pl-[15px] mt-[30px] h-[40%] rounded-lg"
                />

                <input
                  type="text"
                  placeholder=" Link"
                  value={link.address}
                  onChange={(e) =>
                    updateLanguage(link.id, "address", e.target.value)
                  }
                  className="w-[50%] border-b outline-none py-2 pl-[15px] mt-[30px] h-[40%] rounded-lg"
                />
              </div>
            )}

            <div className="absolute left-120 mb-[25px]">
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

      <button
        onClick={addLink}
        className="ml-[25px] mt-6 px-4 py-2 bg-black text-white rounded-md"
      >
        + Add link
      </button>

          
<button onClick={() => navigate("/addmore")} className="flex justify-start ml-[10px] mt-[30px] px-6 py-3 rounded-xl border-1 bg-black text-white 
hover:bg-white hover:text-black hover:border-white transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
 duration-200 font-semibold text-[15px]">← Back</button>
    </div>



  )
}

export default Links
