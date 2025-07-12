const features = [
  { title: 'Easy Booking', icon: '🏠', desc: 'Reserve your desired flat in a few clicks.' },
  { title: 'Secure Payments', icon: '💳', desc: 'Rent payments made fast and secure via Stripe.' },
  { title: 'Admin Dashboard', icon: '🛠️', desc: 'Manage announcements, members, and coupons.' },
  { title: 'Coupon Discounts', icon: '🎟️', desc: 'Apply valid coupons to reduce rent.' },
];

const FeaturesSection = () => (
  <section className="py-12 px-4 bg-base-200 text-center">
    <h2 className="text-3xl font-bold mb-10">Core Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="card bg-base-100 p-6 shadow-md">
          <div className="text-5xl">{f.icon}</div>
          <h3 className="font-bold text-lg mt-4">{f.title}</h3>
          <p className="text-sm mt-2">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
