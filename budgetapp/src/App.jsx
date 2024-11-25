import { useState } from "react";
import { FaKeyboard, FaUserCircle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import TypingBox from "./Components/TypingBox";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className='h-screen w-full bg-gradient-to-br from-red-900 via-gray-800 to-gray-900 text-white grid grid-rows-[auto_1fr_auto]'>
      {/* Header Section */}
      <div className='  p-5 rounded-lg shadow-lg w-50 flex items-center justify-between '>
        {/* Typing Keyboard Icon and Text */}
        <div className='flex items-center gap-4'>
          <FaKeyboard className='h-6 w-9 text-white' />

          <span className='font-robotoMono text-2xl'>
            Typing in space
            <span className='text-pink-400 ml-2'>
              <Typewriter
                loop
                cursor
                cursorStyle='||||'
                typeSpeed={50}
                delaySpeed={2000}
                words={[
                  "is out of this world",
                  "makes aliens jealous",
                  "is faster than light",
                  "writes better than my cat",
                  "is not rocket science... or is it?",
                ]}
              />
            </span>
          </span>
        </div>

        {/* Account Icon */}
        <FaUserCircle className='h-8 w-8 text-pink-400 cursor-pointer hover:text-pink-300  mr-8' />
      </div>

      {/* Typing box section */}

      <div className='flex justify-center items-center'>
        <TypingBox />
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
