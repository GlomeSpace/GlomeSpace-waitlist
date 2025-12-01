import { useState } from "react";
import { Link } from "react-router-dom";


const InvestorForm=()=>{
    const [investorName, setInvestorName] =useState("");
    const [investorEmail, setInvestorEmail] =useState("");
    const [message, setMessage] =useState("");

    return(
       <div className="relative flex flex-col items-center justify-center bg-slate-100 h-dvh w-full pb-72">
     <Link to="/">
      <img src="/photos/glomespace-logo.svg"  className="h-10 md:h-15" />
     </Link>

      <div className="w-8/10 h-8/10">
        <div className="flex flex-col items-center text-blue-900">
          <h1 className="font-headerFont font-bold text-[33px] text-center md:text-[60px]">
            Ship Smarter, Faster and Cheaper
          </h1>
          <h2 className="font-headerFont font-semi-bold md:text-[30px]">
            
            Connect Your Package with a Traveler Heading Your Way.
          </h2>

          <p className="font-primaryFont mt-5 text-[15px] md:text-lg  text-black">
            Stop overpaying for international shipping. Join the verified
            peer-to-peer network making global delivery affordable and reliable.
          </p>
        </div>

        <div className="flex flex-col  items-center  lg:mt-10">
          <div className="flex flex-col  items-center justify-center font-headerFont w-full md:w-5/10 h-max py-3 md:px-20 gap-3">
            <div className="flex items-center gap-3 w-full">

           
            <label className="text-[15px]">Name</label>
            <input
              type="text"  
              id="investorName"
              className="p-2 min-h-10 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full resize-none overflow-hidden"
              placeholder="John Doe"
            />
             </div>
            <div className="flex items-center gap-3 w-full">
             
            <label className="text-[15px]">Email</label>
            <input
              type="email"  
              id="investorEmail"
              className="p-2 min-h-10 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full resize-none overflow-hidden"
              placeholder="yourname@gmail.com"
            />
            </div>

          <div className="flex items-center gap-3 w-full">

            <textarea
              type="text"  
              className="p-2 min-h-30 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full  resize-none overflow-hidden"
              placeholder="type your message here..."
              rows={1}
            />
            </div>

            <div className="  px-2 text-white rounded-xl">
              <button className="bg-blue-900 p-2 rounded-sm">
                send message
              </button>
            </div>
          </div>
         
        </div>
      </div>




      <div className="absolute flex gap-5 px-5  items-center justify-between left-0 bottom-0 h-20 w-full bg-blue-900">
        <div className="font-headerFont text-white text-[10px]  md:text-[12px]">
          <p>
            &copy; {new Date().getFullYear()} GlomeSpace, Inc and its affiliates
          </p>
        </div>
        <div className="font-headerFont text-white text-[10px]  md:text-[12px]">
          <p className="hover:underline">Become an Angel Investor</p>

        </div>
      </div>
    </div>
  );
}

export default InvestorForm;
