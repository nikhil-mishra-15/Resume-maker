import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Inputform() {
  const [resume, setResume] = useState({
    personal: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      address: "",
      nationality: "",
      place_of_birth: "",
      postalcode: "",
    },

    about: "",

    education: [
      {
        id: crypto.randomUUID(),
        institute: "",
        degree: "",
        duration: ""
      }
    ],

    experience: [
      {
        company: "",
        duration: "",
        role: "",
        description: ""
      }
    ],

    skills: []
  });

  function handleEduChange(id, field, value) {
    setResume(prev => ({ ...prev, education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu) }))
  };

  const addEducation = () => {
    setResume(prev => ({ ...prev, education: [...prev.education, { id: crypto.randomUUID(), institute: "", degree: "", duration: "" }] }))
  };

  const hasEducation = resume.education.some(edu =>
    edu.institute.trim() !== "" ||
    edu.degree.trim() !== "" ||
    edu.duration.trim() !== ""
  );


  return (
    <div className='min-h-screen'>
      <div className='min-w-[1200px] h-full flex flex-row gap-2 text-black'>
        <div className='w-1/2 border-l-1 border-r-1 flex flex-col'>

          <section className='flex flex-col gap-2'>
            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Enter your Name:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                value={resume.personal.first_name}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, first_name: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Phone:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                value={resume.personal.phone}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, phone: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Email:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                value={resume.personal.email}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, email: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Address:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                value={resume.personal.address}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, address: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'> Tell us About yourself </h4>
              <textarea className='w-[200px] ml-[20px] mt-[20px] border-b-1'
                value={resume.personal.about}
                rows="5"
                cols="40"
                placeholder="About Me"
                maxlength="300"
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, about: e.target.value } }))}
              ></textarea>
            </div>

            <div className='mt-[20px] flex flex-col gap-8'>

              <h4 className='flex justify-start pl-[20px]'>Education</h4>

              {resume.education.map((edu, index) => (
                <div key={edu.id} className='grid grid-flow-col grid-rows-2 gap-7 pl-[30px]'>
                  <input className='w-[80%] border-b-1'
                    type='text'
                    placeholder='Institute'
                    value={edu.institute}
                    onChange={(e) => handleEduChange(edu.id, "institute", e.target.value)}
                  />

                  <input className='w-[80%] border-b-1 '
                    type="text"
                    placeholder='Degree'
                    value={edu.degree}
                    onChange={(e) => handleEduChange(edu.id, "degree", e.target.value)}
                  />

                  <input className='w-[80%] border-b-1'
                    type='text'
                    placeholder='Duration'
                    value={edu.duration}
                    onChange={(e) => handleEduChange(edu.id, "duration", e.target.value)}
                  />
                </div>

              ))}
              <button onClick={addEducation} className='mx-auto w-[30%] text-white mb-[20px]'>+ Add Education</button>

            </div>
          </section>

        </div>










        <div className='w-1/2 border-2 border-black'>
          <section className='flex flex-col gap-3'>
            <h2 className='mt-[2px] text-4xl '>{resume.personal.first_name}</h2>

            <div className='flex flex-row justify-between text-[12px] text-gray-500 pl-[10px] pr-[10px] mt-[25px]'>
              <p >{resume.personal.phone}</p>
              <p>{resume.personal.email}</p>
              <p>{resume.personal.address}</p>
            </div>

            {resume.personal.address && <hr className='bg-white mx-6' />}
            {resume.personal.about && (
              <div>
                <p className='text-lg font-bold ml-[20px] flex flex-start'>ABOUT ME</p>
                <p className="pl-[10px] text-[12px] mx-auto mt-[2px] leading-relaxed text-black whitespace-pre-wrap max-w-[90%] text-left">
                  {resume.personal.about}
                </p>
              </div>
            )}
            {resume.personal.about && <hr className='bg-white mx-6' />}

            <section>
            {hasEducation && (
              <div className="mt-6">
                <h2 className="text-lg font-bold ml-[20px] flex flex-start">
                  EDUCATION
                </h2>

                <div className="text-sm space-y-2">
                  {resume.education.map(edu =>
                    edu.institute || edu.degree || edu.duration ? (
                      <div key={edu.id}>
                        <div className='flex flex-row gap-2 ml-[30px] mt-[20px]'>
                        {edu.institute && (
                          <p className="font-semibold">{edu.institute}</p>
                        )}
                        {edu.institute && <p>|</p>}
                        {edu.duration && (
                          <p className="text-gray-500">{edu.duration}</p>
                        )}
                        </div>
                        {edu.degree && <p className='flex flex-start ml-[30px]'>{edu.degree}</p>}
                       
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}
           </section>






          </section>
        </div>
      </div>
    </div>
  )
}

export default Inputform
