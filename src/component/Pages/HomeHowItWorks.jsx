// HomeHowItWorks.jsx
import React from 'react';
import { FaUserPlus, FaUtensils, FaHandHoldingHeart, FaHandshake } from 'react-icons/fa';

const HomeHowItWorks = () => {
  return (
    <div className="py-16 bg-base-200 text-center">
      <h2 className="text-3xl font-bold text-accent mb-10">How It Works</h2>
      <div className="grid gap-8 md:grid-cols-4 w-11/12 mx-auto">
        <div>
          <FaUserPlus className="text-4xl text-primary mx-auto mb-4" />
          <h4 className="font-semibold text-lg">Sign Up</h4>
          <p>Create a free account to get started.</p>
        </div>
        <div>
          <FaUtensils className="text-4xl text-primary mx-auto mb-4" />
          <h4 className="font-semibold text-lg">Post or Browse</h4>
          <p>Share extra food or find what's available nearby.</p>
        </div>
        <div>
          <FaHandHoldingHeart className="text-4xl text-primary mx-auto mb-4" />
          <h4 className="font-semibold text-lg">Request or Donate</h4>
          <p>Make a food request or offer it with one click.</p>
        </div>
        <div>
          <FaHandshake className="text-4xl text-primary mx-auto mb-4" />
          <h4 className="font-semibold text-lg">Connect & Share</h4>
          <p>Coordinate pickup and share kindness!</p>
        </div>
      </div>
    </div>
  );
};

export default HomeHowItWorks;
