import React from 'react';
import { FaUsers, FaHandsHelping, FaLeaf } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-11/12 mx-auto py-12 max-w-6xl">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6 text-accent">
        About FoodNeighbor
      </h2>

      {/* Description */}
      <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        <span className="font-semibold text-primary">FoodNeighbor</span> is a community-driven platform built to reduce food waste and hunger by connecting people who have excess food with those in need. Whether you're a generous donor or someone looking for support, we welcome you to join us in this meaningful journey.
      </p>

      {/* Info Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaUsers className="text-4xl text-secondary mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Community Powered</h3>
          <p>Connects people who want to help with those who need it, building strong local communities.</p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaHandsHelping className="text-4xl text-secondary mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Easy Food Sharing</h3>
          <p>List, browse, request, and manage food sharing — all in one seamless platform.</p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaLeaf className="text-4xl text-secondary mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Reduce Waste</h3>
          <p>Promotes sustainability by helping distribute unused food instead of throwing it away.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h4 className="text-xl font-semibold mb-4">Want to make a difference?</h4>
        <p className="mb-6">Join FoodNeighbor today — share your extra food or request what you need, it's all free and impactful.</p>
        <a href="/register" className="btn btn-accent text-white">Get Started</a>
      </div>
    </div>
  );
};

export default About;
