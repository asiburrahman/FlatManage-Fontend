// HomeCTA.jsx
import React from 'react';
import { Link } from 'react-router';

const CallAction = () => {
  return (
    <div className="bg-accent text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
      <p className="text-lg mb-6">Join the FoodNeighbor community today and start sharing or requesting food.</p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link to="/dashboard/addFood" className="btn btn-outline text-white border-white">
          Share Food
        </Link>
        <Link to="/availableFood" className="btn btn-secondary">
          Browse Food
        </Link>
      </div>
    </div>
  );
};

export default CallAction;
