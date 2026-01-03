import React from 'react'

function Preview({ resume }) {

  const SOCIAL_ICONS = {
    facebook: "/face.png",
    twitter: "/twitter.jpg",
    linkedin: "/linkedin.png",
    instagram: "/instagram.avif",
    github: "/github.png",
    website: "/website.png",
  };

  const normalize = (text = "") => {
    text = text.trim().toLowerCase()
  }

  const languages = resume.languages;
  const hasCourse = resume.courses.some(course =>
    course.name.trim() !== "" || course.institution.trim() !== "" || course.startdate.trim() !== "" || course.enddate.trim() !== ""
  );

  const hasEducation = resume.education.some(edu =>
    edu.institute.trim() !== "" ||
    edu.degree.trim() !== "" ||
    edu.startyear !== null ||
    edu.endyear !== null
  );


  const hasLang = resume.languages.some(lang =>
    lang.name.trim() !== ""
  );

  const haswork = resume.experience.some(work =>
    work.job_title.trim() !== "" ||
    work.company.trim() !== ""
  );

  const haslink = resume.links.some(link =>
    link.label.trim() !== "" || link.label.trim() !== ""
  )

  const hasskill = resume.skills.some(skill =>
    skill.name.trim() !== ""
  )

  const LEVELS1 = [
    "Native speaker",
    "Highly proficient",
    "Very good command",
    "Good working knowledge",
    "B2",
    "B1",
    "A2",
  ];

  const LEVELS2 = {
    0: "Native speaker",
    1: "Highly proficient",
    2: "Very good command",
    3: "Good working knowledge",
    4: "B2",
    5: "B1",
    6: "A2",
  };


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
    <div id="resume-preview" >
      <section className='flex flex-col gap-3'>
        <div className='flex flex-col relative text-center'>
          <h2 className='text-4xl py-auto'>{resume.personal.first_name}</h2>
          <p className='font-bold text-m text-gray-500 mt-[1px] mb-[5px]'>{resume.personal.position}</p>
          {haslink && (
            <div className='flex flex-row gap-2 w-[80%] mx-auto justify-center mt-[13px]'>
              {resume.links.map(link => (
                <div key={link.id} className=''>
                  {link.label && (
                    <a href={link.address.startsWith("http")
                      ? link.address
                      : `https://${link.address}`} className='flex flex-row gap-1 place-content-center'>
                      <img src={SOCIAL_ICONS[link.label]} height="5px" width="15px" />
                      <p className='text-gray-700 text-[12px]'>{link.label}</p>
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='flex flex-row justify-between text-[12px] text-gray-500 font-semibold pl-[10px] pr-[10px] mt-[20px]'>
          <p >{resume.personal.phone}</p>
          <p>{resume.personal.email}</p>
          <p>{resume.personal.address}</p>
        </div>

        {resume.personal.address && <hr className='bg-white mx-6' />}
        {resume.personal.about && (
          <div >
            <div className='bg-gray-200 w-[98%] mx-auto flex place-content-center' style={{ backgroundColor: "#f5f5f5" }}>
              <p className='text-sm font-bold ml-[20px] flex flex-start underline underline-offset-6 pb-[5px] tracking-[2px]'>PROFESSIONAL SUMMARY</p>
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
                <h2 className="text-sm font-bold ml-[20px] flex flex-start pb-[5px] underline underline-offset-6 tracking-[2px]">
                  EDUCATION
                </h2>
              </div>

              <div className="text-sm space-y-2">
                {resume.education.map(edu =>
                  edu.institute || edu.degree || edu.startyear || edu.endyear ? (
                    <div key={edu.id}>
                      <div className='flex flex-row gap-2 ml-[30px] mt-[20px]'>
                        {edu.institute && (
                          <p className="font-semibold">{edu.institute}</p>
                        )}
                        {edu.institute && <p>|</p>}
                        {edu.startyear && (
                          <div className='flex flex-row'>
                            <p className="text-gray-500">{edu.startyear}</p>
                            {edu.endyear && <p>-</p>}
                            <p className='text-gray-500'>{edu.endyear}</p>
                          </div>
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
                <h2 className="text-sm font-bold  ml-[20px] flex flex-start pb-[5px] underline underline-offset-6 tracking-[2px]">
                  EMPLOYMENT HISTORY
                </h2>
              </div>

              <div className="text-sm space-y-2">
                {resume.experience.map(work =>
                  work.job_title || work.company || work.city || work.duration || work.description ? (


                    <div key={work.id} className="mx-[10px] ml-[20px] my-[8px]">

                      {/* TOP ROW */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {work.job_title && <span>✿</span>}
                          {work.job_title && <p className="font-semibold">{work.job_title}</p>}
                          {work.company && <p className="font-semibold">, {work.company}</p>}
                        </div>
 
                        {work.duration && (
                            <span className="block flex-grow border-b border-dotted border-gray-800 mt-[13px]"></span>
                          )}
                        <div className="text-right text-sm">
                        
                          {work.duration && <p className='pt-[13px]'>{work.duration}</p>}
                          {work.city && <p className="text-[12px]">{work.city}</p>}
                        </div>
                      </div>

                      {/* DESCRIPTION (FULL WIDTH) */}
                      {work.description && (
                        <p className="text-black text-sm italic leading-relaxed text-left">
                          {work.description}
                        </p>
                      )}



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
                <h2 className="text-sm font-bold  ml-[20px] flex flex-start pb-[5px] underline underline-offset-6 tracking-[2px]">
                  SKILLS
                </h2>
              </div>

              <div className="text-sm space-y-2 grid grid-cols-2 gap-x-10 py-2">
                {resume.skills.map(skill =>
                  skill.name.trim() !== "" ? (
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

        <section>
          {hasCourse && (
            <div className="mt-2">

              <div className='bg-gray-200 w-[98%] mx-auto flex place-content-center'>
                <h2 className="text-sm font-bold ml-[20px] flex flex-start pb-[5px] underline underline-offset-6 tracking-[2px]">
                  COURSES
                </h2>
              </div>

              <div className="text-sm space-y-2">
                {resume.courses.map(course =>
                  course.name || course.institution || course.startdate || course.enddate ? (
                    <div key={course.id}>
                      <div className='flex flex-row gap-1 ml-[10px] mt-[20px]'>
                        {course.name && (<span className="text-sm pr-[5px]">✿</span>)}

                        <div className='flex flex-col'>
                          {course.name && (<p className="font-semibold">{course.name}</p>)}
                          {course.institution && <p className='flex justify-start text-gray-500 italic'>{course.institution}</p>}

                        </div>
                        {course.startdate && (<span className="flex-grow border-b border-dotted mb-[22px] border-gray-800 mb-[2px]"></span>)}
                        <div className='flex flex-row mr-[10px]'>
                          {course.startdate && <p>{course.startdate}</p>}
                          {course.enddate && <p>-</p>}
                          {course.enddate && <p>{course.enddate}</p>}
                        </div>
                      </div>

                    </div>
                  ) : null
                )}
              </div>
            </div>
          )}
        </section>


        <section>
          {resume.hobbies && (

            <div className='bg-gray-200 w-[98%] mx-auto flex place-content-center mt-2'>
              <h2 className="text-sm font-bold ml-[20px] flex flex-start pb-[5px] underline underline-offset-6 tracking-[2px]">
                HOBBIES
              </h2>
            </div>

          )}
          <p className='mt-2 italic flex flex-start pl-[15px] mb-[7px]'>{resume.hobbies}</p>

        </section>


        <section>
          {hasLang && (
            <div>
              <div className='bg-gray-200 w-[98%] mx-auto flex place-content-center mt-2'>
                <h2 className="text-sm font-bold ml-[20px] flex flex-start pb-[5px] underline underline-offset-6 tracking-[2px]">
                  LANGUAGES
                </h2>
              </div>

              <div className="text-sm grid grid-cols-2 mt-[17px]">
                {languages.map(lang => (
                  <div key={lang.id} className='flex flex-row pl-[18px] pr-[18px] pb-[5px]'>
                    <ul className='list-disc pl-[5px]'>
                      <li>{lang.name}</li>
                    </ul>
                    {lang.level && (<span className="flex-grow border-b border-dotted border-gray-700 mb-[2px]"></span>)}
                    <p className='font-semibold italic underline text-[10px] mt-[4px]'>{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

      </section>


    </div>
  )
}

export default Preview
