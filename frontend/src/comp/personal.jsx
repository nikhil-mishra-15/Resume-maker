import React from 'react'
import { useNavigate } from "react-router-dom";

function Personal({ personal, setResume }) {
  const navigate = useNavigate();

  return (
    <div>
      <section className='flex flex-col gap-2'>
        <p><span className='flex justify-start pl-[20px] text-lg font-bold'>Personal Information</span></p>
        <div className='flex flex-row'>
          <h4 className='pl-[20px] mt-[25px]'>Enter your Name:</h4>
          <input className="w-[200px] ml-[20px] mt-[20px]"
            type='text'
            value={personal.first_name}
            onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, first_name: e.target.value } }))}
          />

        </div>

        <div className='flex flex-row'>
          <h4 className='pl-[20px] mt-[25px]'>Position:</h4>
          <input className="w-[200px] ml-[20px] mt-[20px] "
            type='text'
            placeholder='  current position'
            value={personal.position}
            onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, position: e.target.value } }))}
          />

        </div>

        <div className='flex flex-row'>
          <h4 className='pl-[20px] mt-[25px]'>Phone:</h4>
          <input className="w-[200px] ml-[20px] mt-[20px]"
            type='text'
            value={personal.phone}
            onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, phone: e.target.value } }))}
          />

        </div>

        <div className='flex flex-row'>
          <h4 className='pl-[20px] mt-[25px]'>Email:</h4>
          <input className="w-[200px] ml-[20px] mt-[20px]"
            type='text'
            value={personal.email}
            onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, email: e.target.value } }))}
          />

        </div>

        <div className='flex flex-row'>
          <h4 className='pl-[20px] mt-[25px]'>Address:</h4>
          <input className="w-[200px] ml-[20px] mt-[20px]"
            type='text'
            value={personal.address}
            onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, address: e.target.value } }))}
          />

        </div>

        <div className='flex flex-row'>
          <h4 className='pl-[20px] mt-[25px]'> Tell us About yourself </h4>
          <input className='w-[200px] ml-[20px] mt-[20px] text-[13px] pl-[7px]'
            value={personal.about}
            placeholder="min 50 words"
            onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, about: e.target.value } }))}
          />
        </div>

        <div className='flex justify-between ml-[10px] mr-[10px] mt-[30px]'>
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
                >
                    Back
                </button>

                <button
                    onClick={() => navigate("/education")}
                    className="px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
                >
                    Next
                </button>
               </div>

      </section>
    </div>
  )
}

export default Personal
