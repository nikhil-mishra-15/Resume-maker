import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Personal from './personal';
import Education from './education';
import Preview from './preview';
import Welcome from './welcome';
import Workexp from './workexp';
import Skills from './skills';

function Inputform() {
  const [step, setStep] = useState(0);
  const [resume, setResume] = useState({
    personal: {
      first_name: "",
      last_name: "",
      position: "",
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
        duration: "",
        open: true
      }
    ],

    experience: [
      {
        id: crypto.randomUUID(),
        job_title: "",
        company: "",
        duration: "",
        city: "",
        description: "",
        open: true
      }
    ],

    skills: [
      {
        id: crypto.randomUUID(),
        name: "",
        level: 0,
        open: true
      }

    ]
  });

  const [fullpre, setfullpre] = useState(false);
  return (
    <div className='min-h-screen'>
      <div className='flex flex-row fixed gap-2 top-1.5 left-1.5'>
      <img src='/icon.jpg' height="10px" width="25px"/>
      <p className='text-m font-semibold text-black'>myResume-maker</p>
      </div>
      <button onClick={() => setfullpre(prev => !prev)} className="fixed bottom-2 right-2 z-10 px-6 py-3 mr-[2px] rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[10px]">
        {fullpre ? "Exit Preview" : "Zoom Your Resume"}
      </button>

      <div className='min-w-[1240px] h-full flex flex-row gap-2 text-black'>
        {fullpre ? (
          <div className='flex border border-2 w-[83%] mx-auto min-h-screen'>
            <Preview resume={resume} />
          </div>
        ) : (
          <>
            <div className='w-1/2 flex flex-col min-h-screen'>
              <div className='pt-[15px] h-[100%]'>
              <div className='flex border-l-1 border-r-1 flex-col place-content-center mt-[50px]'>
                {step === 0 && <Welcome />}
                {step === 1 && <Personal personal={resume.personal} setResume={setResume} />}
                {step === 2 && <Education education={resume.education} setResume={setResume} />}
                {step === 3 && <Workexp experience={resume.experience} setResume={setResume} />}
                {step === 4 && <Skills skills={resume.skills} setResume={setResume} />}


                <div className="flex justify-between mt-15">
                  {step > 0 && (
                    <button className="ml-[20px] px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]" onClick={() => setStep(step - 1)}>Back</button>
                  )}

                  {step < 5 && (
                    <button className='mr-[20px] ml-[20px] px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]' onClick={() => setStep(step + 1)}>Next</button>
                  )}
                </div>
                </div>
              </div>

            </div>

            <div className='w-[65%] border-2 border-black min-h-full'>
              <Preview resume={resume} />
            </div>




          </>




        )}
      </div>
    </div>

  )
};

export default Inputform
