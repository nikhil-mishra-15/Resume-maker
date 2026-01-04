import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Download() {

  return (
    <div className="flex flex-col font-semibold font-mono text-[20px] ml-[20px] mt-[20px] overflow-hidden">
      <p className="flex justify-start">Congrats!! ✨</p>
      <p className="flex self-start pr-[30px] text-left text-[17px] animate-slideInLeft">Your Resume is ready, Zoom In for better Experience!!</p>

      
      <button
        onClick={() => window.print()}
        className="px-4 py-2 bg-black text-white rounded print:hidden w-[35%] border text-sm hover:bg-white hover:text-black text-center place-content-center ml-[15px] mb-[5px] rounded-[8px] mt-[30px] hover:scale-115 ease-in-out duration-200"
      >
        Download PDF
      </button>

      <p className="text-[14px] italic flex justify-start mt-[80px]">The downloaded pdf will not be completely like Preview, because</p>
      <p className="text-[14px] italic flex justify-start pr-[55px]">of a simple tool used, to give the functionality for download </p>

    </div>
  );
}

export default Download;

