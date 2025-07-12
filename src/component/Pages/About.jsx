import React from 'react';
import { FaTools, FaMoneyCheckAlt, FaRegComments, FaUserShield, FaBuilding, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="py-14 px-4 md:px-8 lg:px-16 bg-primary text-white text-center rounded-b-[50px]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to <span >
              Manage<span className="text-warning">Flat</span>
            </span></h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          A smart platform to manage apartments, rent, members, and announcements — all in one place.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              ManageFlat simplifies building operations by digitizing rent collection, apartment assignment, and tenant communication.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To empower building managers and residents with transparent, efficient, and secure building management tools.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-base-200 py-14 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose ManageFlat?</h2>

        <div className="space-y-14 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img src="./image/about/listing.jpg" alt="Dashboard" className="rounded-lg shadow-md w-full" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <FaBuilding /> Apartment Listings
              </h3>
              <p>List, manage, and track apartments easily by floor, block, and number.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div>
              <img src="./image/about/payment.jpg" alt="Payment" className="rounded-lg shadow-md w-full" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <FaMoneyCheckAlt /> Rent Payments
              </h3>
              <p>Accept online payments securely with integrated Stripe functionality.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img src="./image/about/announce.jpg" alt="Announcement" className="rounded-lg shadow-md w-full" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <FaRegComments /> Announcement Panel
              </h3>
              <p>Broadcast important updates and alerts directly to all members.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div>
              <img src="./image/about/role.jpg" alt="Roles" className="rounded-lg shadow-md w-full" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <FaUserShield /> Role-Based Access
              </h3>
              <p>Separate access and dashboards for admins and members ensure secure interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-primary to-warning text-white rounded-t-[40px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start managing smarter</h2>
        <p className="mb-6 max-w-xl mx-auto">Join ManageFlat and take full control of your building — easier, faster, and safer.</p>
        <a href="/register" className="btn btn-primary px-6 rounded-full font-semibold shadow-md">Get Started</a>
      </section>
    </div>
  );
};

export default About;
