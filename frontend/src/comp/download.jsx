import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Download() {
  
  return (
    <div className="flex flex-col font-semibold font-mono text-[20px] ml-[20px] mt-[20px]">
      <p className="flex justify-start">Congrats!! ✨</p>
      <p className="flex self-start pr-[30px] text-left text-[17px]">Your Resume is ready, Zoom In for better Experience!!</p>
      <div className="mt-[50px] text-[17px]">
        <p>In next update, you'll be able to Download <br></br>your-Resume..</p>
      </div>
    </div>
  );
}

export default Download;

