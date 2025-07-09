// HomeStats.jsx
import React from 'react';
import CountUp from 'react-countup';

const Impact = () => {
  return (
    <div className="py-16 bg-base-100 text-center">
      <h2 className="text-3xl font-bold text-accent mb-10">Our Impact</h2>
      <div className="grid gap-6 md:grid-cols-3 w-11/12 mx-auto">
        <div>
          <h3 className="text-5xl font-bold text-primary">
            <CountUp end={1200} duration={3} />+
          </h3>
          <p className="text-lg">Meals Shared</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-primary">
            <CountUp end={25} duration={3} />+
          </h3>
          <p className="text-lg">Communities Served</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-primary">
            <CountUp end={500} duration={3} />+
          </h3>
          <p className="text-lg">Users Helped</p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
