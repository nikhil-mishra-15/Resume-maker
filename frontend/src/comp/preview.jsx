import React from 'react'

function Preview({ resume }) {
  const { personal, education, experience, skills } = resume;

  const hasEducation = resume.education.some(edu =>
    edu.institute.trim() !== "" ||
    edu.degree.trim() !== "" ||
    edu.duration.trim() !== ""
  );

  const haswork = resume.experience.some(work =>
    work.job_title.trim() !== "" ||
    work.company.trim() !== ""
  );

  const hasskill = resume.skills.some(skill =>
    skill.name.trim() !== ""
  )

  const LEVELS = [
    { label: "Novice", color: "bg-red-500", pos: "0%" },
    { label: "Beginner", color: "bg-orange-500", pos: "20%" },
    { label: "Skillful", color: "bg-yellow-400", pos: "40%" },
    { label: "Experienced", color: "bg-green-500", pos: "60%" },
    { label: "Expert", color: "bg-purple-500", pos: "80%" }
  ];

  const LEVEL_COLORS = {
    Novice: {
      solid: "bg-red-500",
      light: "bg-red-100",
    },
    Beginner: {
      solid: "bg-orange-500",
      light: "bg-orange-100",
    },
    Skillful: {
      solid: "bg-yellow-500",
      light: "bg-yellow-100",
    },
    Experienced: {
      solid: "bg-blue-500",
      light: "bg-blue-100",
    },
    Expert: {
      solid: "bg-purple-500",
      light: "bg-purple-100",
    },
  };


  return (
    <div>
      <section className='flex flex-col gap-3'>
        <div className='flex flex-col relative'>
        <h2 className='text-4xl py-auto'>{resume.personal.first_name}</h2>
        <p className='font-bold text-sm text-gray-500 mt-[3px]'>{resume.personal.position}</p>
        </div>

        <div className='flex flex-row justify-between text-[12px] text-gray-500 font-semibold pl-[10px] pr-[10px] mt-[10px]'>
          <p >{resume.personal.phone}</p>
          <p>{resume.personal.email}</p>
          <p>{resume.personal.address}</p>
        </div>

        {resume.personal.address && <hr className='bg-white mx-6' />}
        {resume.personal.about && (
          <div >
            <div className='bg-gray-200 w-[98%] mx-auto flex place-content-center'>
              <p className='text-sm font-bold ml-[20px] flex flex-start underline underline-offset-6 pb-[5px]'>PROFESSIONAL SUMMARY</p>
            </div>
            <p className="pl-[10px] text-[12px] mx-auto mt-[22px] leading-relaxed text-black whitespace-pre-wrap max-w-[90%] text-left">
              {resume.personal.about}
            </p>
          </div>
        )}
        {resume.personal.about && <hr className='bg-white mx-6 mt-[20px]' />}

        <section>
          {hasEducation && (
            <div className="mt-2">

              <div className='bg-gray-200 w-[98%] mx-auto flex place-content-center'>
                <h2 className="text-sm font-bold ml-[20px] flex flex-start pb-[5px] underline underline-offset-6">
                  EDUCATION
                </h2>
              </div>

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

        <section>
          {haswork && (
            <div className="mt-6">

              <div className='bg-gray-200 w-[98%] mx-auto flex place-content-center'>
                <h2 className="text-sm font-bold  ml-[20px] flex flex-start pb-[5px] underline underline-offset-6">
                  EMPLOYMENT HISTORY
                </h2>
              </div>

              <div className="text-sm space-y-2">
                {resume.experience.map(work =>
                  work.job_title || work.company || work.city || work.duration || work.description ? (
                    <div key={work.id} className='flex flex-row justify-between relative'>
                      <div className='flex flex-row gap-1 mx-[10px] ml-[20px] my-[8px]'>
                        {work.job_title && (<span className="text-sm">✿</span>)}
                        {work.job_title && (<p className='font-semibold'>{work.job_title}</p>)}
                        {work.job_title && <p className='font-bold'>,</p>}
                        {work.company && (<p className='font-semibold'>{work.company}</p>)}
                      </div>
                      {work.duration && (<span className="flex-grow border-b border-dotted border-gray-400 mb-[12px]"></span>)}
                      <div className='pr-[15px] pt-[5px]'>
                        {work.duration && (<p>{work.duration}</p>)}
                        {work.city && (<p className='text-[12px] absolute right-4'>{work.city}</p>)}
                      </div>

                    </div>
                  ) : null
                )}
              </div>
            </div>
          )}

        </section>
        <section>
          {hasskill && (
            <div className="mt-6">
              <div className='bg-gray-200 w-[98%] mx-auto flex place-content-center'>
                <h2 className="text-sm font-bold  ml-[20px] flex flex-start pb-[5px] underline underline-offset-6">
                  SKILLS
                </h2>
              </div>

              <div className="text-sm space-y-2 grid grid-cols-2 gap-x-10 py-2">
                {resume.skills.map(skill=>
                  skill.name.trim() !== "" ?  (
                    <div key={skill.id}>
                     <div className='flex flex-row pl-[10px] pt-[10px] pr-[10px]'>
                     {skill.name && (<span className="text-sm pr-[5px]">✿</span>)}
                     {skill.name && (<p>{skill.name}</p>)}
                     {skill.level && (<span className="flex-grow border-b border-dotted border-gray-400 mb-[2px]"></span>)}
                     {skill.level && (<p className='font-semibold italic'>{LEVELS[skill.level].label}</p>)}
                     </div>
                    </div>
                

                  ) : null
                )}
          
              </div>
            </div>
        


          )}






        </section>
      </section>


    </div>
  )
}

export default Preview
