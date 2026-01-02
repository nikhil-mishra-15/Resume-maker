import React from 'react'
import { useNavigate } from "react-router-dom";
function Welcome() {
    const navigate = useNavigate();
    return (
        <div className='mt-[150px]'>
            <div className='flex flex-col'>
                <p><span className='text-[25px] font-bold font-serif'>Welcome to myResume-maker</span></p>
                <p className='font-mono self-end pr-[117px] text-[15px]'>crafted by: Nikhil Mishra </p>
            </div>
            <p className='font-sans pt-[20px]'>turns your experience into impact.</p>
            <p className='font-sans'>Build sleek, professional resumes with a developer’s precision.</p>


            <button
                onClick={() => navigate("/personal")}
                className="flex justify-end mt-[50px] ml-[15px] px-6 py-3 rounded-xl border-1 bg-black text-white
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
            >
                Next
            </button>
        </div>
    )
}

export default Welcome
