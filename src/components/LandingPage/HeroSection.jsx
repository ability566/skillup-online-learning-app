import React from "react";
import { ReactTyped } from "react-typed";

const HeroSection = () => {

    const scrollToForm = () => {
      const formSection = document.getElementById("signup-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    };
    
  
    return (
      <section className="relative bg-gray-600 text-white text-center py-60">
        <div className="absolute inset-0">
          <img 
            src="/images/heroSectionPicture.jpg" 
            alt="Data Analysis Visualization" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
  
        <div className="relative z-10">
          <h1 className="text-3xl font-bold md:text-5xl sm:text-4xl">Master Data Analytics with SkillUp Academy</h1>
<div className="font-bold mt-5 flex justify-center items-center text-sm sm:text-base md:text-lg">
  <h3>Flexible and Affordable learning with</h3>
  <ReactTyped
    className="pl-1 text-white" 
    strings={["R", "SQL", "PYTHON", "POWER BI"]}
    typeSpeed={100}
    backSpeed={90}
    loop
  />
</div>

<p className="text-xs sm:text-sm md:text-lg mt-4">Join thousands of learners worldwide.</p>
  
          <button onClick={scrollToForm} className="bg-blue-500 text-white mt-7 px-4 py-4 rounded-md hover:bg-blue-600
                                                                                  transition-transform transform hover:scale-105 active:scale-95">
              Enroll Now
          </button>

        </div>
      </section>
    );
  };
  
  export default HeroSection;
  