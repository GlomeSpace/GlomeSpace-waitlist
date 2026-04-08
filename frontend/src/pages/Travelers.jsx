import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShipmentComponent } from "../components/ShipmentComponent";
import { FlightDetailsComponent } from "../components/FlightDetailsComponent";
import { motion, AnimatePresence } from "framer-motion";
import { CirclePlus } from "lucide-react";

export const Travelers = () => {
  const GLOMESPACE_APP_URL = import.meta.env.VITE_GLOMESPACE_APP_URL;

  const [showAnswer, setShowAnswer] = useState(null);

  const questions = [
    {
      index: 1,
      question: "How much can I earn by delivering items?",
      answer:
        "Earnings depend on the weight/size of the item and the distance. Many travelers cover a significant portion of their plane ticket or fuel costs by picking up 2–3 small shipments.",
    },
    {
      index: 2,
      question: "Am I responsible for the contents of the package?",
      answer:
        "As a traveler, you have the right (and responsibility) to inspect the item before accepting it. Never accept a sealed package you haven't inspected. GlomeSpace provides a checklist to help you verify items.",
    },
    {
      index: 3,
      question: "What if the recipient doesn't show up at the destination?",
      answer:
        "Our app provides clear pickup/drop-off instructions. If a recipient is a no-show, you can contact GlomeSpace support to arrange for the item to be held at a local partner hub or returned.",
    },
    {
      index: 4,
      question: "Is it legal to carry items for others across borders?",
      answer:
        "Yes, as long as the items are legal and declared correctly. We provide guidelines on 'Personal Use' limits and customs declarations for major routes to keep you compliant.",
    },
    {
      index: 5,
      question: "How do I get paid?",
      answer:
        "Once the recipient confirms delivery via the app (usually by scanning a QR code you provide), the payment is instantly released from escrow to your GlomeSpace wallet.",
    },
    {
      index: 6,
      question: "Can I choose what kind of items I want to carry?",
      answer:
        "Absolutely. You have full control. You can filter requests by category (e.g., documents only, electronics, or clothing) and only accept what fits in your luggage.",
    },
    {
      index: 7,
      question: "Does GlomeSpace provide insurance for me?",
      answer:
        "We protect travelers from fraudulent claims by requiring shipment owners to photograph their items at handover. Our mediation team is always available to protect your rating and your earnings.",
    },
  ];

  return (
    <div className="min-h-screen font-headerFont bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
      <section className="pt-20 bg-blue-100 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row  md:gap-2 items-center">
            <div className="px-8 w-full md:w-7/10  mt-13  text-center lg:text-left">
              <SlotMachine />

              <p className=" md:mt-10 font-bold text-gray-900 text-[20px]">
                Pay for your next air ticket using your extra baggage space.
              </p>
              <p className=" mt-3 md:mt-10 ">
                GlomeSpace has revolutionized the way how e-commerce sellers
                connect with travelers. Become a GlomeSpace traveler to day and
                earn extra income while traveling the world by delivering
                packages on your way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                <Button className="text-[13px] px-2  bg-blue-400">
                  <a
                    href={`${GLOMESPACE_APP_URL}/find-deliverer`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become a Deliverer
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center  gap-5 h-50 md:h-100 w-6/10">
              <div className="absolute top-1 md:left-90 ">
                <FlightDetailsComponent />
              </div>
              <div className="absolute">
                <img src="/photos/traveler.png" width={600} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Post Your Flight Details",
                desc: "Share your upcoming travel plans and available baggage space on our platform",
              },
              {
                num: "2",
                title: "Match with Shipments",
                desc: "Browse and accept shipment requests that align with your travel route and schedule",
              },
              {
                num: "3",
                title: "Ship & Earn",
                desc: "Safely deliver packages to their destination and earning extra income for your travels",
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.num}
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-900/30"></div>
                )}
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <h1 className="text-blue-900 font-bold text-center mt-20">
          Frequently Asked Questions (FAQs) by Travelers
        </h1>
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
          <div className="md:w-4/10">
            <img
              src="/photos/questions3.png"
              alt="FAQs"
              className="w-full h-110 md:h-150 object-cover object-bottom object-bottom"
            />
          </div>

          <div className="md:w-6/10">
            {questions.map((q) => (
              <div
                key={q.index}
                className="mb-6 shadow-md p-4 rounded-lg bg-slate-50 border-gray-200"
              >
                <div className="flex justify-between ">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {q.question}
                  </h3>
                  <button
                    onClick={() =>
                      setShowAnswer(showAnswer === q.index ? null : q.index)
                    }
                  >
                    <CirclePlus />
                  </button>
                </div>

                {showAnswer === q.index && (
                  <p className="text-gray-600 mt-2">{q.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const words = [
  "a Vlogger ?",
  "an Expat ?",
  "a Traveler ?",
  "a Student ?",
  "a Digital Nomad ?",
  "a Remote Worker ?",
  "a Business Traveler ?",
  "a Tourist ?",
];

const SlotMachine = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 font-bold">
      <h1 className="text-[20px] md:text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 ">
        Are you traveling as{" "}
        <span className="inline-flex h-max overflow-hidden px-2 rounded align-bottom ">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-blue-900"
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </span>
      </h1>
    </div>
  );
};
