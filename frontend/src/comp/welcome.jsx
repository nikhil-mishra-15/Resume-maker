import React from 'react'
import { useNavigate } from "react-router-dom";
function Welcome() {
    const navigate = useNavigate();
    return (
        <div className='mt-[100px]'>
            <div className='flex flex-col'>
                <p className='flex justify-start ml-[70px] font-mono font-semibold text-[20px] text-right'>Your Resume will Preview on the</p>
                <span className=' font-mono font-semibold text-[20px] mb-[80px] ml-[140px] italic'> - Right Side </span>
            </div>
            <button
                onClick={() => navigate("personal")}
                className="flex justify-end mt-[50px] ml-[15px] px-6 py-3 rounded-xl border-1 bg-black text-white
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
            >
                Let's start
            </button>
        </div>
    )
}

export default Welcome
