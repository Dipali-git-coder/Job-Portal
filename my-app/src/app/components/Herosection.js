"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] flex items-center">
      
      {/* Background Image */}
      <Image
        src="/job portal hero section.jpg" // put your image inside public folder
        alt="Campus Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white">
        
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A one stop portal for <br /> Placements & Internships
          </h1>
          <p className="text-gray-200 text-lg">
            Welcome to the recruitment website. Our graduates are a combination
            of rigorous thinking, hard work, and strong fundamentals. Let us begin...
          </p>
        </div>

        {/* Right Buttons */}
        <div className="mt-8 md:mt-0 space-y-4">
          {["Student", "Recruiter", "Coordinator", "Verifier"].map((role) => (
            <button
              key={role}
              className="w-52 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
