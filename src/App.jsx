import { useState } from "react";
import { motion } from "framer-motion";

const flags = [
  { country: "Norway", image: "https://flagcdn.com/w320/no.png" },
  { country: "Thailand", image: "https://flagcdn.com/w320/th.png" },
  { country: "Chile", image: "https://flagcdn.com/w320/cl.png" },
  { country: "Egypt", image: "https://flagcdn.com/w320/eg.png" },
  { country: "Colombia", image: "https://flagcdn.com/w320/co.png" },
  { country: "Vietnam", image: "https://flagcdn.com/w320/vn.png" },
  { country: "Greece", image: "https://flagcdn.com/w320/gr.png" },
  { country: "Malaysia", image: "https://flagcdn.com/w320/my.png" },
  { country: "Finland", image: "https://flagcdn.com/w320/fi.png" },
  { country: "Peru", image: "https://flagcdn.com/w320/pe.png" },
  { country: "Romania", image: "https://flagcdn.com/w320/ro.png" },
  { country: "Ukraine", image: "https://flagcdn.com/w320/ua.png" },
  { country: "Indonesia", image: "https://flagcdn.com/w320/id.png" },
  { country: "Ireland", image: "https://flagcdn.com/w320/ie.png" },
  { country: "South Korea", image: "https://flagcdn.com/w320/kr.png" },
  { country: "Hungary", image: "https://flagcdn.com/w320/hu.png" },
  { country: "Czech Republic", image: "https://flagcdn.com/w320/cz.png" },
  { country: "Slovakia", image: "https://flagcdn.com/w320/sk.png" },
  { country: "Switzerland", image: "https://flagcdn.com/w320/ch.png" },
  { country: "Belgium", image: "https://flagcdn.com/w320/be.png" },
  { country: "Denmark", image: "https://flagcdn.com/w320/dk.png" },
  { country: "Serbia", image: "https://flagcdn.com/w320/rs.png" },
  { country: "Singapore", image: "https://flagcdn.com/w320/sg.png" },
  { country: "Morocco", image: "https://flagcdn.com/w320/ma.png" },
  { country: "Tunisia", image: "https://flagcdn.com/w320/tn.png" },
  { country: "Paraguay", image: "https://flagcdn.com/w320/py.png" },
  { country: "Ecuador", image: "https://flagcdn.com/w320/ec.png" },
  { country: "Bolivia", image: "https://flagcdn.com/w320/bo.png" },
  { country: "Costa Rica", image: "https://flagcdn.com/w320/cr.png" },
  { country: "Panama", image: "https://flagcdn.com/w320/pa.png" },
  { country: "Lithuania", image: "https://flagcdn.com/w320/lt.png" },
  { country: "Latvia", image: "https://flagcdn.com/w320/lv.png" },
  { country: "Estonia", image: "https://flagcdn.com/w320/ee.png" },
  { country: "Slovenia", image: "https://flagcdn.com/w320/si.png" },
  { country: "Bulgaria", image: "https://flagcdn.com/w320/bg.png" },
  { country: "Croatia", image: "https://flagcdn.com/w320/hr.png" },
  { country: "Malta", image: "https://flagcdn.com/w320/mt.png" },
  { country: "Cyprus", image: "https://flagcdn.com/w320/cy.png" },
  { country: "Iceland", image: "https://flagcdn.com/w320/is.png" },
  { country: "Luxembourg", image: "https://flagcdn.com/w320/lu.png" },
  { country: "Lebanon", image: "https://flagcdn.com/w320/lb.png" },
  { country: "Algeria", image: "https://flagcdn.com/w320/dz.png" },
  { country: "Kazakhstan", image: "https://flagcdn.com/w320/kz.png" },
  { country: "Uzbekistan", image: "https://flagcdn.com/w320/uz.png" },
  { country: "Kyrgyzstan", image: "https://flagcdn.com/w320/kg.png" },
  { country: "Armenia", image: "https://flagcdn.com/w320/am.png" },
  { country: "Georgia", image: "https://flagcdn.com/w320/ge.png" },
  { country: "Moldova", image: "https://flagcdn.com/w320/md.png" },
  { country: "Bosnia and Herzegovina", image: "https://flagcdn.com/w320/ba.png" },
  { country: "North Macedonia", image: "https://flagcdn.com/w320/mk.png" }
];

export default function FlagQuiz() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextFlag = () => {
    setShowAnswer(false);
    setIndex((prevIndex) => (prevIndex + 1) % flags.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Flag Quiz</h1>
      <div className="bg-transparent p-6 rounded-2xl shadow-lg text-center w-[50%]">
        {/* Flag Container with Black Border */}
        <div className="border border-hidden p-4 rounded-lg flex items-center justify-center">
          <motion.img
            key={flags[index].image}
            src={flags[index].image}
            alt="Flag"
            className="w-80 h-60 object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Buttons and Country Name */}
        <div className="mt-4 flex flex-col items-center">
          <button
            onClick={() => setShowAnswer(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Show Answer
          </button>
          <button
            onClick={nextFlag}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600"
          >
            Next Flag
          </button>

          {/* Country Name in Bold and Large Text */}
          {showAnswer && (
            <p className="text-4xl font-bold mt-4 text-gray-800">
              {flags[index].country}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

