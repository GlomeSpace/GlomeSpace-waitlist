import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const InvestorForm = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageTitle, setMessageTitle] = useState();
  const [finalMessage, setFinalMessage] = useState();
  const INITIAL_STATE = {
    username: "",
    email: "",
    message: "",
    newsletter: false,
  };

  const [userData, setUserData] = useState(INITIAL_STATE);

  const { username, email, message, newsletter } = userData;

  const handleOnChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };

  const postFormData = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(`${BACKEND_URL}/mail-list/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessageTitle("Submission Failure");
        setFinalMessage("Failed to add your details");
        //throw new Error(
        // errorData.message ||
        //   `Server responded with status: ${response.status}`
        //);
      }
      await response.json();
      setUserData(INITIAL_STATE);
      setMessageTitle("Submission Complete");
      setFinalMessage("Details added successfully. \n Thank you!");
    } catch (error) {
      setMessageTitle("Submission Failure");
      setFinalMessage("Failed to add your details \n please try again");
      //console.log("Error while posting form data:", error);
    } finally {
      setIsLoading(false);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-slate-100 min-h-screen w-full">
      <AlertDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        className=" "
      >
        <AlertDialogContent className=" w-full md:w-5/10 ">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-blue-900 ">
              {messageTitle}
            </AlertDialogTitle>
            <AlertDialogDescription>{finalMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setIsDialogOpen(false)}
              className="bg-blue-900"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Link to="/">
        <img src="/photos/glomespaceB.svg" width={300} />
      </Link>

      <div className="w-8/10 h-max mb-30  ">
        <div className="flex flex-col items-center text-blue-900">
          <h1 className="font-headerFont font-bold text-[33px] text-center md:text-[60px]">
            Ship Smarter, Faster and Cheaper
          </h1>
          <h2 className="font-headerFont font-semi-bold md:text-[30px]">
            Welcome to the Angel Investors' page
          </h2>

          <p className="font-bodyFont mt-5 text-[15px] md:text-lg  text-black">
            We've announced out pre-seed funding round, which starts on 5th of
            January 2026, Please submit your email and we'll be ready to get
            back to you with the details of our fund raising.
          </p>
        </div>

        <form
          onSubmit={(e) => postFormData(e)}
          className="flex flex-col items-center w-full h-full mt-10 lg:mt-20"
        >
          <div className="flex flex-col  items-center justify-center font-headerFont w-full lg:w-5/10 h-full   py-3 md:px-20 gap-3">
            <div className="flex items-center gap-3 w-full">
              <label className="text-[15px]">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                required
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
                required
                className="p-2 min-h-10 bg-white box-border border-gray-300 border-3 text-sm rounded-xl w-full resize-none overflow-hidden"
                placeholder="yourname@gmail.com"
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
                <button
                  disabled
                  size="sm"
                  className="flex gap-2 bg-blue-900 p-2 rounded-sm"
                >
                  Processing
                  <Spinner className="size-6 text-white" />
                </button>
              ) : (
                <button type="submit" className="bg-blue-900 p-2 rounded-sm">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="absolute flex gap-5 px-5  items-center justify-between left-0 bottom-0 h-24 w-full bg-blue-900">
        <div className="font-headerFont text-white text-[10px]  md:text-[12px]">
          <p>
            &copy; {new Date().getFullYear()} GlomeSpace, Inc and its affiliates
          </p>
        </div>
        <div className="font-headerFont text-white text-[10px]  md:text-[12px]">
          <Link to="/" className="hover:underline">
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvestorForm;
