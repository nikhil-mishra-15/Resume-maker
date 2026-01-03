import { Routes, Route, Link } from "react-router-dom";
import Courses from "./courses";
import Hobbies from "./hobbies";
import Languages from "./languages";
import Links from "./links";
import { useLocation,useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Addmore({resume , setResume}) {
  const navigate = useNavigate();
  const location = useLocation();

  // true only on /addmore
  const isRoot = location.pathname === "/inputform/addmore";

  return (
    <div>
      {/* MENU */}
      {isRoot && (
      <div>
        <p className="flex justify-start pl-[20px] text-lg font-bold">Additional Info's</p>

      <div className="grid grid-cols-2 gap-5 ml-[45px] mt-[30px] font-semibold place-content-center">
        <Link to="courses" className="flex gap-2 text-[17px] shadow-[0_4px_6px_rgba(0,0,0,0.85)] rounded-[7px] items-center place-content-center w-[60%] py-[5px]">
          <img src="/courses.png" width="20" />
          Courses
        </Link>

        <Link to="hobbies" className="flex gap-2 text-[17px] shadow-[0_4px_6px_rgba(0,0,0,0.85)] rounded-[7px] items-center place-content-center w-[70%]">
          <img src="/hobbies.png" width="20" />
          Hobbies
        </Link>

        <Link to="languages" className="flex gap-2 text-[17px] shadow-[0_4px_6px_rgba(0,0,0,0.85)] rounded-[7px] items-center place-content-center w-[70%] py-[5px]">
          <img src="/language.svg" width="20" />
          Languages
        </Link>

        <Link to="links" className="flex gap-2 text-[17px] shadow-[0_4px_6px_rgba(0,0,0,0.85)] rounded-[7px] items-center place-content-center w-[70%]">
          <img src="/social.png" width="20" />
          Social Links
        </Link>
      </div>

      
      <div className="flex justify-between ml-[10px] mr-[10px] mt-[70px]">
        <button
          onClick={() => navigate("../skills")}
          className="px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
        >
          Back
        </button>

        <button
          onClick={() => navigate("../download")}
          className="px-6 py-3 rounded-xl border-1 bg-black text-white 
               hover:bg-white hover:text-black hover:border-black transition-all  shadow-[0_2px_6px_rgba(0,0,0,0.95)] 
                 duration-200 font-semibold text-[15px]"
        >
          Next
        </button>
        </div>
        </div>

      )}

      {!isRoot && (
        <Outlet context={{ resume, setResume }} />
      )}
    
     
    </div>
  );
}

export default Addmore;
