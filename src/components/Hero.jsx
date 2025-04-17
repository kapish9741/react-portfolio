import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const FadeInText = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-4 relative">
      <motion.span
      initial={{ opacity: 0, y : 10 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-violet-800"
    >
      Frontend Developer & UI/UX Designer
    </motion.span>
      <motion.h1
      initial={{ opacity: 0, y : 10 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
      className="text-6xl font-bold text-center text-neutral-100"
    >
      Building <span className="bg-gradient-to-l from-indigo-500 via-violet-500 to-purple-400 bg-clip-text text-transparent">digital experiences</span> that inspire
    </motion.h1>
    <motion.h2
      initial={{ opacity: 0, y : 10 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ delay: 0.2,duration: 0.4, ease: "easeOut" }}
      className="w-1/2 text-center text-xl text-neutral-400"
    >
      I craft engaging and intuitive user interfaces that combine creativity and functionality. Let's work together to bring your vision to life.
    </motion.h2>
    <div className="w-1/2 flex items-center justify-center mt-4 gap-8">
      <motion.button
        initial={{ opacity: 0, y : 10 }}
        animate={{ opacity: 1, y : 0 }}
        transition={{ delay: 0.3,duration: 0.4, ease: "easeOut" }}
        className=" border-none rounded-lg bg-violet-700 px-10 py-3 text-neutral-100 hover:bg-violet-600 cursor-pointer"
      >
        View My Work
      </motion.button>
      <motion.button
        initial={{ opacity: 0, y : 10 }}
        animate={{ opacity: 1, y : 0 }}
        transition={{ delay: 0.3,duration: 0.4, ease: "easeOut" }}
        className=" border border-neutral-800 rounded-lg px-10 py-3 text-neutral-100 hover:bg-violet-600 cursor-pointer"
      >
        View My Work
      </motion.button>
    </div>
    <div className="absolute bottom-10 flex items-center justify-center gap-2 flex-col text-neutral-400 text-md hover:text-violet-600 cursor-pointer">
      <span className="text-sm">Scroll Down</span>
      <motion.span
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut"}}
      ><i className="bi bi-arrow-down"></i></motion.span>
    </div>
    </div>
  );
};

export default FadeInText;