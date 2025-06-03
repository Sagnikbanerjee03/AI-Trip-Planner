import React from 'react';
import { Link } from 'react-router-dom';

 function Body() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-10">
      <div className="max-w-4xl text-center mb-6">
        <h1 className="font-extrabold text-3xl sm:text-5xl leading-tight">
          <span className="text-[#f56551] block sm:inline">
            Discover Your Next Adventure with AI:
          </span>
          Personalized Itineraries at Your Fingertips
        </h1>
      </div>

      <p className="text-xl text-gray-500 text-center max-w-2xl mb-8">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      <Link to="/Create-trip">
        <button >Get Started, It’s Free</button>
      </Link>
    </div>
  );
}

export default Body;
