const Display = ({ value }) => {
  return (
    
      <div className=" bg-[#3a4764] shadow-[inset_10px_10px_25px_rgba(0,0,0,0.5),inset_-10px_-10px_25px_rgba(255,255,255,0.1)] text-right text-white  mb-6 space-y-1   p-8 text-5xl font-mono h-full  rounded-3xl m-4 overflow-auto hide-scrollbar ">
        {value}
      </div>
  
  );
};

export default Display;
