import React from 'react'
import { useNavigate } from "react-router-dom";


function Workexp({ experience, setResume }) {

    const navigate = useNavigate();

    function handleworkchange(id, field, value) {
        setResume(prev => ({ ...prev, experience: prev.experience.map(work => work.id === id ? { ...work, [field]: value } : work) }))
    }

    function addWork() {
        setResume(prev => ({ ...prev, experience: [...prev.experience.map(work => ({ ...work, open: false })), { id: crypto.randomUUID(), job_title: "", company: "", duration: "", role: "", description: "", open: true }] }))
    }

    const togglework = (id) => {
        setResume(prev => ({
            ...prev, experience: prev.experience.map(work => work.id === id ? { ...work, open: !work.open } : work)
        }))
    }

    const deletework = (id) => {
        setResume(prev => ({
            ...prev,
            experience: prev.experience.filter(work => work.id !== id)
        }));
    };

    return (
        <div>
            <section className='flex flex-col gap-8 '>
                <p className='flex justify-start pl-[20px] text-lg font-bold'>Employment history</p>
                {experience.map((work, index) => (
                    <div key={work.id} className=' rounded-lg p-4 w-[80%] ml-[10px] shadow-[0px_10px_10px_rgba(0,0,0,0.15)]'>
                        <div onClick={() => togglework(work.id)} className="flex justify-between items-center cursor-pointer">
                            <div>
                                <p className='font-semibold'>
                                    {work.company || "(Not Specified)"}
                                </p>
                            </div>
                            <span className="text-[23px] hover:scale-125 hover:duration-200 hover:ease-in-out">
                                {work.open ? "🙂" : "🙃"}
                            </span>
                        </div>
                        {work.open && (
                            <div className="space-y-6 mt-1">
                                <div className='grid grid-cols-2 gap-2 w-[100%] pt-[10px]'>
                                    <input className='mb-[10px]'
                                        type='text'
                                        placeholder='Job Title'
                                        value={work.job_title}
                                        onChange={(e) => handleworkchange(work.id, 'job_title', e.target.value)}
                                    />

                                    <input className='mb-[10px]'
                                        type='text'
                                        placeholder='Company'
                                        value={work.company}
                                        onChange={(e) => handleworkchange(work.id, 'company', e.target.value)}
                                    />

                                    <input className=''
                                        type='text'
                                        placeholder='ex: 2 years'
                                        value={work.duration}
                                        onChange={(e) => handleworkchange(work.id, 'duration', e.target.value)}
                                    />

                                    <input className=''
                                        type='text'
                                        placeholder='City'
                                        value={work.city}
                                        onChange={(e) => handleworkchange(work.id, 'city', e.target.value)}
                                    />

                                    <input className='mt-[10px]'
                                        type='text'
                                        placeholder='Description'
                                        value={work.description}
                                        onChange={(e) => handleworkchange(work.id, 'description', e.target.value)}
                                    />

                                </div>
                            </div>

                        )}
                        <div className="absolute left-120 mb-[25px]">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deletework(work.id);
                                }}
                                className="text-red-600 text-sm font-semibold hover:underline"
                            >
                                <img src='/delete.png' height="20px" width="25px" />
                            </button>
                        </div>
                    </div>
                ))
                }

                <button onClick={addWork} className="mx-auto relative inline-block font-semibold cursor-pointer text-black before:content-['']
         before:absolute
         before:left-0
         before:top-0
         before:w-[3px]
         before:h-0
         before:bg-black
         before:transition-all
         before:duration-300
         hover:before:h-full px-[9px] mt-[10px] mr-[190px]">+ Add Employment history</button>

                <div className='flex justify-between ml-[10px] mr-[10px]'>
                    <button
                        onClick={() => navigate("../education")}
                        className="px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
                    >
                        Back
                    </button>

                    <button
                        onClick={() => navigate("../skills")}
                        className="px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
                    >
                        Next
                    </button>
                </div>

            </section>
        </div>
    )
}

export default Workexp
