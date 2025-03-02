import React from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between relative">
          <p
            className="underline-text text-2xl font-semibold capitalize"
            style={{ color: "var(--heading-color)" }}
          >
            Our Refreshing Drinks
          </p>
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            ><MdChevronLeft className="text-lg text-white" /></motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            ><MdChevronRight className="text-lg text-white" /></motion.div>
          </div>
        </div>

        <RowContainer />
      </section>
    </div>
  );
};

export default MainContainer;
