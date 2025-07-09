import React from 'react';

const SocialImpact = () => {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        A food sharing platform with{' '}
        <span className="text-primary">game-changing</span>{' '}
        <span className="text-secondary">social impact</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
        <img
          src="/hungry1.jpg"
          alt="Mom feeding child"
          className="rounded-xl shadow-md"
        />
        <div>
          <h3 className="text-xl font-bold ">Be a force for good in your local community.</h3>
          <p className=" mt-2">
            Thanks to your spare food, families nearby can eat dinner that day (rather than going without).
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
        <div>
          <h3 className="text-xl font-bold ">Supercharge your sustainability agenda.</h3>
          <p className=" mt-2">
            We'll make sure our work together is helping you progress faster towards ESG and Net Zero targets.
          </p>
        </div>
        <img
          src="/computer.png"
          alt="Sustainability dashboard"
          className="rounded-xl shadow-md"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
        <img
          src="/support.jpg"
          alt="Staff sharing food"
          className="rounded-xl shadow-md"
        />
        <div>
          <h3 className="text-xl font-bold ">Delight (and retain) your employees.</h3>
          <p className=" mt-2">
            Staff feel amazing knowing their employer is stepping up to support people struggling.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-bold ">Sleep easy knowing your food is always kept safe.</h3>
          <p className=" mt-2">
            Each month we share millions of meals, without a single confirmed food poisoning incident to date.
          </p>
          <button className="btn btn-primary mt-4">Tell me more</button>
        </div>
        <img
          src="/carryfood.png"
          alt="Food delivery walking"
          className="rounded-xl shadow-md"
        />
      </div>
    </section>
    );
};

export default SocialImpact;