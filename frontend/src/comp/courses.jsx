import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();
  const { resume, setResume } = useOutletContext();
  const courses = resume.courses;

  function handleCourseChange(id, field, value) {
    setResume(prev => ({ ...prev, courses: prev.courses.map(course => course.id === id ? { ...course, [field]: value } : course) }))
  };

  const addcourses = () => {
    setResume(prev => ({ ...prev, courses: [...prev.courses.map(course => ({ ...course, open: false })), { id: crypto.randomUUID(), name: "", institution: "", startdate: "", enddate: "", open: true }] }))
  };


  const togglecourse = (id) => {
    setResume(prev => ({
      ...prev, courses: prev.courses.map(course => course.id === id ? { ...course, open: !course.open } : course)
    }))
  }

  const deletecousrse = (id) => {
    setResume(prev => ({
      ...prev,
      courses: prev.courses.filter(course => course.id !== id)
    }));
  };

  return (
    <div>
      <div className='flex flex-col gap-8'>
        <div className="flex flex-row ml-[25px] gap-2">
          <img src="/courses.png" width="20" />
          <p><span className='flex justify-start text-lg font-bold'>Courses</span></p>

        </div>

        {courses.map((course, index) => (
          <div key={course.id} className=' rounded-lg p-4 w-[80%] ml-[10px] shadow-[0px_10px_10px_rgba(0,0,0,0.15)] w-[70%]'>

            {/* HEADER (collapsed view) */}
            <div onClick={() => togglecourse(course.id)} className="flex justify-between items-center cursor-pointer">
              <div>
                <p className='font-semibold'>
                  {course.name || course.institution || "(Not Specified)"}
                </p>
              </div>
              <span className="text-[23px] hover:scale-125 hover:duration-200 hover:ease-in-out">
                {course.open ? "🙂" : "🙃"}
              </span>
            </div>

            {/* BODY (expanded view) */}
            {course.open && (
              <div className="space-y-6 mt-5" >
                <div className='grid grid-cols-2 gap-2'>
                  <input className='w-[95%] px-[20px] py-[5px]'
                    type='text'
                    placeholder=' name'
                    value={course.name}
                    onChange={(e) => handleCourseChange(course.id, 'name', e.target.value)}
                  />

                  <input className='w-[95%]'
                    type='text'
                    placeholder='  Institution'
                    value={courses.institution}
                    onChange={(e) => handleCourseChange(course.id, 'institution', e.target.value)}
                  />
                  <div className="flex flex-row w-[200%] mt-[20px]">
                    <div className="flex flex-col">
                      <label className="w-[50%]">Start Date:</label>
                      <input className='w-[75%] px-[20px] py-[5px] mt-[5px]'
                        type="text"
                        placeholder='ex: Jan-20XX'
                        value={course.startdate}
                        onChange={(e) => handleCourseChange(course.id, 'startdate', e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="w-[40%]">End Date:</label>
                      <input className='w-[75%] px-[20px] py-[5px] mt-[5px]'
                        type="text"
                        placeholder='ex: Nov-20XX'
                        value={course.enddate}
                        onChange={(e) => handleCourseChange(course.id, 'enddate', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

            )}
            <div className="absolute left-120 mb-[25px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deletecousrse(course.id);
                }}
                className="text-red-600 text-sm font-semibold hover:underline"
              >
                <img src='/delete.png' height="20px" width="25px" />
              </button>
            </div>
          </div>


        ))}
        <button onClick={addcourses} className="mx-auto mr-[240px] relative inline-block font-semibold cursor-pointer text-black before:content-['']
         before:absolute
         before:left-0
         before:top-0
         before:w-[3px]
         before:h-0
         before:bg-black
         before:transition-all
         before:duration-300
         hover:before:h-full px-[9px]">+ Add Course</button>




      </div>

      <button onClick={() => navigate("/inputform/addmore")} className="flex justify-start ml-[10px] mt-[30px] px-6 py-3 rounded-xl border-1 bg-black text-white 
hover:bg-white hover:text-black hover:border-white transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
 duration-200 font-semibold text-[15px]">← Back</button>

    </div>
  );
}
export default Courses;