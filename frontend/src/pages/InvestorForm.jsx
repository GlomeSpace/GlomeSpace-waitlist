"use client"
import { toast } from "sonner"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const InvestorForm = () => {
  const BACKEND_URL = [process.env.BACKEND_URL];
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    message: "",
    newsletter: false,
  });


  const { username, email, message, newsletter } = userData;

  const handleOnChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };

  const postFormData = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      setIsLoading(true);
      console.log(userData);
      const response = await fetch(`${BACKEND_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
         setFinalMessage("Failed to add your details \n please try again!")
        
        throw new Error(
          errorData.message ||
            `Server responded with status: ${response.status}`
        );
      }
      const data = await response.json();
      console.log(data);
      setFinalMessage("Details added successfully. \n Thank you!")
    } catch (error) {
      console.log("Error while posting form data:", error);
      
    } finally {
      setIsLoading(false);
      toast(finalMessage);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-slate-100 h-dvh w-full pb-72">
      <Link to="/">
        <img src="/photos/glomespace-logo.svg" className="h-10 md:h-15" />
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

        <form
          onSubmit={(e) => postFormData(e)}
          className="flex flex-col  items-center lg:mt-10"
        >
          <div className="flex flex-col  items-center justify-center font-headerFont w-full md:w-5/10 h-max py-3 md:px-20 gap-3">
            <div className="flex items-center gap-3 w-full">
              <label className="text-[15px]">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                className="p-2 min-h-10 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full resize-none overflow-hidden"
                placeholder="John Doe"
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="flex items-center gap-3 w-full">
              <label className="text-[15px]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="p-2 min-h-10 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full resize-none overflow-hidden"
                placeholder="yourname@gmail.com"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div className="flex items-center gap-3 w-full">
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                className="p-2 min-h-30 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full  resize-none overflow-hidden"
                placeholder="type your message here..."
                rows={1}
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={newsletter}
                className="scale-140"
                onChange={handleOnChange}
              />
              <label htmlFor="terms" className="text-[12px] md:text-[15px]">
                Subscribe me for the Newsletter
              </label>
            </div>

            <div className="  px-2 text-white rounded-xl">
              {isLoading ? (
                <Button
                  variant="secondary"
                  disabled
                  size="sm"
                  className="bg-blue-900 "
                >
                  <Spinner className="size-6 text-white" />
                  Processing
                </Button>
              ) : (
                <button type="submit" className="bg-blue-900 p-2 rounded-sm">
                  join the waitlist
                </button>
              )}
            </div>
          </div>
        </form>
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
};

export default InvestorForm;
