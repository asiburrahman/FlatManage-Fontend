import { Link } from 'react-router';
import { FaArrowRight, FaRegCalendarCheck } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="py-16 bg-base-200 text-base-content rounded-2xl">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Ready to Experience <span className="text-primary">Hassle-Free</span> Flat Management?
          </h2>
          <p className="text-lg mb-6">
            Join hundreds of satisfied members who manage their rent, announcements,
            agreements, and community updates—all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/dashboard"
              className="btn btn-primary text-white gap-2"
            >
              <FaRegCalendarCheck /> Go to Dashboard
            </Link>
            <Link
              to="/apartment"
              className="btn btn-outline btn-warning gap-2"
            >
              <FaArrowRight /> Explore Apartments
            </Link>
          </div>
        </div>

        {/* Right Side Graphic / Image */}
        <div className="text-center">
          <img
            src="https://i.ibb.co/SXsFL6V5/istockphoto-1263319152-612x612.jpg"
            alt="Manage Flats Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

