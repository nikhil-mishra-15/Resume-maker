import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import YearPicker from './yearpicker';
function Education({ education, setResume }) {

    const [active, setActive] = useState(false);

    
    const hasEducation = education.some(edu =>
        edu.institute.trim() !== "" ||
        edu.degree.trim() !== "" ||
        edu.startyear !== null ||
        edu.endyear !== null
      );
      
    const navigate = useNavigate();

    function handleEduChange(id, field, value) {
        setResume(prev => ({ ...prev, education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu) }))
    };

    const addEducation = () => {
        setResume(prev => ({ ...prev, education: [...prev.education.map(edu => ({ ...edu, open: false })), { id: crypto.randomUUID(), institute: "", degree: "", startyear: "", endyear: "", open: true }] }))
    };

  

    const toggleedu = (id) => {
        setResume(prev => ({
            ...prev, education: prev.education.map(edu => edu.id === id ? { ...edu, open: !edu.open } : edu)
        }))
    }

    const deleteEducation = (id) => {
        setResume(prev => ({
            ...prev,
            education: prev.education.filter(edu => edu.id !== id)
        }));
    };


    return (
        <div>
            <div className='flex flex-col gap-8'>

                <p><span className='flex justify-start pl-[20px] text-lg font-bold'>Education</span></p>

                {education.map((edu, index) => (
                    <div key={edu.id} className=' rounded-lg p-4 w-[80%] ml-[10px] shadow-[0px_10px_10px_rgba(0,0,0,0.15)]'>

                        {/* HEADER (collapsed view) */}
                        <div onClick={() => toggleedu(edu.id)} className="flex justify-between items-center cursor-pointer">
                            <div>
                                <p className='font-semibold'>
                                    {edu.institute || edu.degree || "(Not Specified)"}
                                </p>
                            </div>
                            <span className="text-[23px] hover:scale-125 hover:duration-200 hover:ease-in-out">
                                {edu.open ? "🙂" : "🙃"}
                            </span>
                        </div>

                        {/* BODY (expanded view) */}
                        {edu.open && (
                            <div className="space-y-6 mt-5 ">
                               
                                 <div className='flex justify-around flex-row'>
                                    <input className='w-[40%]'
                                        type='text'
                                        placeholder='Institute'
                                        value={edu.institute}
                                        onChange={(e) => handleEduChange(edu.id, 'institute', e.target.value)}
                                    />

                                    <input className='w-[40%]'
                                        type='text'
                                        placeholder='Degree'
                                        value={edu.degree}
                                        onChange={(e) => handleEduChange(edu.id, 'degree', e.target.value)}
                                    />
                                   </div>
                                    <div className="flex flex-row w-[100%] mt-[20px] gap-6">
                                        <div className="flex flex-col gap-1">
                                            <label className='flex justify-start'>Start Year:</label>

                                            <YearPicker
                                                value={edu.startyear}
                                                onChange={(val) =>
                                                    handleEduChange(edu.id, "startyear", val)
                                                }
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label className='flex justify-start'>End Year:</label>

                                            <YearPicker
                                        
                                                value={edu.endyear}
                                                onChange={(val) =>
                                                    handleEduChange(edu.id, "endyear", val)
                                                }
                                            />
                                        </div>
                                    </div>
                            </div>

                        )}
                        <div className="absolute left-120 mb-[25px]">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteEducation(edu.id);
                                }}
                                className="text-red-600 text-sm font-semibold hover:underline"
                            >
                                <img src='/delete.png' height="20px" width="25px" />
                            </button>
                        </div>
                    </div>


                ))}
                <button onClick={addEducation} className="mx-auto relative inline-block font-semibold cursor-pointer text-black before:content-['']
         before:absolute
         before:left-0
         before:top-0
         before:w-[3px]
         before:h-0
         before:bg-black
         before:transition-all
         before:duration-300
         hover:before:h-full px-[9px] ">
         <span>+ Add Education</span>
    

         </button>


                <div className='flex justify-between ml-[10px] mr-[10px]'>
                    <button
                        onClick={() => navigate("../personal")}
                        className="px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
                    >
                        Back
                    </button>

                    <button
                        onClick={() => navigate("../experience")}
                        className="px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
                    >
                        Next
                    </button>
                </div>


            </div>
        </div>
    )
}
export default Education
