import React from 'react'

function Education({ education, setResume }) {

    function handleEduChange(id, field, value) {
        setResume(prev => ({ ...prev, education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu) }))
    };

    const addEducation = () => {
        setResume(prev => ({ ...prev, education: [...prev.education.map(edu => ({ ...edu, open: false })), { id: crypto.randomUUID(), institute: "", degree: "", duration: "", open: true }] }))
    };

    const hasEducation = education.some(edu =>
        edu.institute.trim() !== "" ||
        edu.degree.trim() !== "" ||
        edu.duration.trim() !== ""
    );

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
            <div className='mt-[20px] flex flex-col gap-8 mt-[50px]'>

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
                            <span className="text-lg">
                                {edu.open ? "▲" : "▼"}
                            </span>
                        </div>

                        {/* BODY (expanded view) */}
                        {edu.open && (
                            <div className="space-y-6 mt-5 ">
                                <div className='flex justify-around gap-2'>
                                    <input className='w-[40%]'
                                        type='text'
                                        placeholder='  Institute'
                                        value={edu.institute}
                                        onChange={(e) => handleEduChange(edu.id, 'institute', e.target.value)}
                                    />

                                    <input className='w-[40%]'
                                        type='text'
                                        placeholder='  Degree'
                                        value={edu.degree}
                                        onChange={(e) => handleEduChange(edu.id, 'degree', e.target.value)}
                                    />

                                    <input className='w-[40%]'
                                        type='text'
                                        placeholder='  ex: 20XX-20XX'
                                        value={edu.duration}
                                        onChange={(e) => handleEduChange(edu.id, 'duration', e.target.value)}
                                    />

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
                                <img src='/delete.png' height="20px" width="25px"/>
                            </button>
                            </div>
                        </div>


                ))}
                        <button onClick={addEducation} className='mx-auto px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]'>+ Add Education</button>

            </div>
        </div>
    )
}
            export default Education
