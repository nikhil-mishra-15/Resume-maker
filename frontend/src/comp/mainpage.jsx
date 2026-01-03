import React from 'react'
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Inputform from './inputform';

function Mainpage() {



    const navigate = useNavigate();

    return (
        <div>
            <div className='w-[1000px] mt-[60px] mr-[100px]'>
                <div className='flex flex-col text-black items-center'>
                    <p><span className='text-[35px] font-semibold font-serif'>Welcome to</span></p>

                    <div className='flex flex-col place-content-center w-full'>
                        <div className='flex flex-row place-content-center'>
                            <img src="/logo.png" height="40px" width="75px"></img>
                            <p className='flex items-center text-[55px] font-bold'><span>myResume-maker</span></p>
                        </div>
                            <p className='font-mono top-3 pl-[400px] text-[20px]'>crafted by: Nikhil Mishra </p>
                    </div>
                    <div className='overflow-hidden'>
                    <p className='font-sans mt-[50px] text-black text-[20px] italic animate-slideInRight'>turns your experience into impact.</p>
                   
                    <p className='font-sans text-black text-[20px] italic animate-slideInLeft'>Build sleek, professional resumes with a developer’s precision.</p>
                    </div>

                    <button
                        onClick={() => navigate("/inputform")}
                        className="flex self-end mt-[50px] ml-[15px] px-6 py-3 rounded-xl border-1 bg-black text-white
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px] "
                    >
                        Next
                    </button>


                </div>
            </div>
        </div>
            )
}

export default Mainpage
