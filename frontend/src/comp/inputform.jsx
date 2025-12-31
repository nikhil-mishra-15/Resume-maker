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
      position:"",
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
        open:true
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
        open:true
      }
    ],

    skills: [
      {
        id: crypto.randomUUID(),
        name: "",
        level:0,
        open: true 
      }
      
    ]
  });


  return (
    <div className='min-h-screen'>
      <div className='min-w-[1240px] h-full flex flex-row gap-2 text-black'>
        <div className='w-1/2 flex flex-col min-h-screen'>
          <div className='border-l-1 border-r-1 border-black pt-[15px] h-[100%]'>
            {step === 0 && <Welcome />}
            {step === 1 && <Personal personal={resume.personal} setResume={setResume} />}
            {step === 2 && <Education education={resume.education} setResume={setResume} />}
            {step === 3 && <Workexp experience={resume.experience} setResume={setResume} />}
            {step === 4 && <Skills skills={resume.skills} setResume={setResume}/>}
  

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

        <div className='w-[65%] border-2 border-black min-h-full'>
          <Preview resume={resume} />
        </div>










      </div>
    </div>

  )
};

export default Inputform
