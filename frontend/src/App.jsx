
import { useState } from "react";
import "./App.css";

function App() {
  const[userEmail, setUserEmail] = useState('');

  return (
    <div className="relative flex flex-col items-center justify-center bg-slate-100 h-screen w-full">
      <img src="/photos/glomespace-logo.svg"  className="h-10 md:h-15" />

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

        <div className="flex flex-col  items-center mt-15 lg:mt-40">
          <div className="flex flex-col md:flex-row items-center justify-center font-headerFont w-full p-3 gap-3">
            <label className="text-[20px] md:text-[25px]">Email</label>
            <textarea
              type="email"  
              className="p-2 min-h-10 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full md:w-3/10 resize-none overflow-hidden"
              placeholder="yourname@gmail.com"
              //value={userEmail}
              //onChange={(e) => setUserEmail(e.target.value)}
              rows={1}
            />

            <div className="flex justify-center   px-2 text-white rounded-xl ">
              <button className="bg-blue-900 p-2 rounded-sm">
                join the waitlist
              </button>
            </div>
          </div>
          <p className="text-blue-900 text-[8px] md:text-[10px]">
            We respect your privacy, We will only use your email for launch
            notifications and updates.
          </p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center bottom-0 h-20 w-full bg-blue-900">
        <div className="font-headerFont text-white text-[10px] text-[10px] md:text-[12px]">
          <p>
            &copy; {new Date().getFullYear()} GlomeSpace, Inc and its affiliates
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
