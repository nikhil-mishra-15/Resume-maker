import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import Personal from './personal';
import Education from './education';
import Preview from './preview';
import Welcome from './welcome';
import Workexp from './workexp';
import Skills from './skills';
import Addmore from './addmore';
import Courses from "./courses";
import Hobbies from "./hobbies";
import Languages from "./languages";
import Links from "./links";
import Download from './download';

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

    experience: [
      {
        id: crypto.randomUUID(),
        job_title: "",
        company: "",
        duration: "",
        role:"",
        description:"",
        open: true
      }
    ],

    education: [
      {
        id: crypto.randomUUID(),
        institute: "",
        degree: "",
        startyear: null,
        endyear: null,
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
    ],

    courses: [
      {
        id: crypto.randomUUID(),
        name: "",
        institution: "",
        startdate: "",
        enddate: "",
        open: true
      }
    ],

    languages: [
      {
        id: crypto.randomUUID(),
        name: "",
        level: "",
        open: true
      }
    ],

    hobbies: "",

    links: [
      {
        id: crypto.randomUUID(),
        label: "",
        address: "",
        open: true
      }
    ]
  });

  const [fullpre, setfullpre] = useState(false);
  return (
    <div>
    <div className='min-h-screen'>
      <div className='flex absolute top-1.5 left-2 flex-row gap-2'>
        <img src='/icon.jpg' height="10px" width="25px" />
        <p className='text-m font-semibold text-black'>myResume-maker</p>
      </div>
      <button onClick={() => setfullpre(prev => !prev)} className="fixed bottom-2 right-2 z-10 px-6 py-3 mr-[5px] rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[11px]">
        {fullpre ? "Exit Preview" : "Zoom Your Resume"}
      </button>

      <div className='min-w-[1240px] h-full flex flex-row gap-2 text-black'>
        {fullpre ? (
          <div className='shadow-[0px_10px_25px_10px_rgba(0,0,0,0.20)] w-[73%] mx-auto min-h-screen'>
            <Preview resume={resume} />
          </div>
        ) : (
          <>
            <div className='w-1/2 flex flex-col min-h-screen'>
              <div className='pt-[15px] h-[100%]'>
                <div className='flex border-l-1 flex-col place-content-center mt-[50px]'>
                  <Routes>
                  <Route index element={<Welcome />} />                    
                  <Route
                      path="personal"
                      element={<Personal personal={resume.personal} setResume={setResume} />}
                    />

                    <Route
                      path="education"
                      element={<Education education={resume.education} setResume={setResume} />}
                    />

                    <Route
                      path="experience"
                      element={<Workexp experience={resume.experience} setResume={setResume} />}
                    />

                    <Route
                      path="skills"
                      element={<Skills skills={resume.skills} setResume={setResume} />}
                    />

                    <Route
                      path="addmore/*"
                      element={<Addmore resume={resume} setResume={setResume} />}
                    >
                      <Route path="courses" element={<Courses />} />
                      <Route path="hobbies" element={<Hobbies />} />
                      <Route path="languages" element={<Languages />} />
                      <Route path="links" element={<Links />} />
                    </Route>

                    <Route path="download" element={<Download />}/>
                  </Routes>

                </div>
              </div>
            </div>
            <div className='w-[65%] min-h-full shadow-[0px_10px_25px_10px_rgba(0,0,0,0.17)]'>
              <Preview resume={resume} />
            </div>
          </>
        )}

      </div>
    </div>
    </div>
  )
};

export default Inputform
