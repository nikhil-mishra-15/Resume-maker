import React from 'react'
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Hobbies() {
  const navigate = useNavigate();
  const { resume, setResume } = useOutletContext();
  const hobbies = resume.hobbies;
  return (
    <div>
      <div className='flex flex-col'>

        <div className="flex flex-row ml-[25px] gap-2 mb-[40px]">
          <img src="/hobbies.png" width="20" />
          <p><span className='flex justify-start text-lg font-bold'>Hobbies</span></p>
        </div>

        <p className='flex justify-start font-semibold mb-[10px] ml-[20px]'>What do you like?</p>
        <textarea
          className="w-[80%] h-[120px] p-3 border rounded-md resize-none ml-[20px]"
          placeholder="Enter your hobbies"
          value={hobbies}
          onChange={(e) =>
            setResume(prev => ({
              ...prev,
              hobbies: e.target.value
            }))
          }
        />


      </div>

      <button onClick={() => navigate("/inputform/addmore")} className="flex justify-start ml-[10px] mt-[30px] px-6 py-3 rounded-xl border-1 bg-black text-white 
hover:bg-white hover:text-black hover:border-white transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
 duration-200 font-semibold text-[15px]">← Back</button>


    </div>
  )
}

export default Hobbies
