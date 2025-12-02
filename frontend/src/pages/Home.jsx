
"use client"
import { toast } from "sonner"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const Home = () => {
  const BACKEND_URL = [process.env.BACKEND_URL];
  const [isLoading, setIsLoading] = useState(false);
  const [finalMessage, setFinalMessage] = useState("");

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const handleOnChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };

  const { username, email, message, newsletter } = userData;

  const postFormData = async (e) => {
    e.preventDefault();
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
        setFinalMessage("Failed to add your details \n please try again!")
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Server responded with status: ${response.status}`
        );
      }

      const data = await response.json();
      setFinalMessage("Details added successfully. \n Thank you!")
      console.log(data);
    } catch (error) {
      console.log("Error while posting form data:", error);
    } finally {
      setIsLoading(false);
      toast(finalMessage);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-slate-100 h-screen w-full">
      <img src="/photos/glomespace-logo.svg" className="h-10 md:h-15" />

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
          className="flex flex-col  items-center mt-10 lg:mt-20"
        >
          <div className="flex flex-col  items-center justify-center font-headerFont w-full p-3 gap-3">
            <label className="text-[20px] md:text-[20px]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              className="p-2 min-h-10 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full md:w-3/10 resize-none overflow-hidden"
              placeholder="yourname@gmail.com"
              onChange={(e) => handleOnChange(e)}
              rows={1}
            />
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

            <div className="flex justify-center   px-2 text-white rounded-xl ">
              {isLoading ? (
                <Button variant="secondary" disabled size="sm" className="bg-blue-900 ">
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
          <p className="text-blue-900 text-[8px] md:text-[10px]">
            We respect your privacy, We will only use your email for launch
            notifications and updates.
          </p>
        </form>
      </div>
      <div className="absolute flex gap-5 px-5  items-center justify-between  bottom-0 h-20 w-full bg-blue-900">
        <div className="font-headerFont text-white text-[10px]  md:text-[12px]">
          <p>
            &copy; {new Date().getFullYear()} GlomeSpace, Inc and its affiliates
          </p>
        </div>
        <div className="font-headerFont text-white text-[10px]  md:text-[12px]">
          <Link to="/become-an-investor" className="hover:underline">
            Become an Angel Investor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
