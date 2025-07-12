import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Asif Hossain',
    title: 'Flat Member, Block A',
    image: 'https://i.ibb.co/9kNqP0tK/pexels-zhuhehuai-716276.jpg',
    rating: 5,
    feedback:
      'ManageFlat has completely transformed how I pay my rent. The payment process is smooth, and I love the discount system through coupons!',
  },
  {
    name: 'Samira Akter',
    title: 'New Member, Block B 2nd Floor',
    image: 'https://i.ibb.co/1cr2k5w/pexels-tima-miroshnichenko-5407206.jpg',
    rating: 4,
    feedback:
      'The booking system was easy to use. I received confirmation quickly and appreciate the clear communication from the admin team.',
  },
  {
    name: 'Rahim Uddin',
    title: 'Long-term, Block C',
    image: 'https://i.ibb.co/C50D4kYM/pexels-tima-miroshnichenko-5452293.jpg',
    rating: 5,
    feedback:
      'ManageFlat makes it easy to manage monthly payments, view announcements, and feel connected to the building community.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-base-100 text-center">
      <h2 className="text-4xl font-bold mb-12">
        What Our <span className="text-primary">Members</span> Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="card bg-base-200 p-6 shadow-lg border rounded-lg">
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 object-cover rounded-full border-2 border-primary mb-4"
              />
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.title}</p>

              <div className="flex mt-2 text-warning">
                {[...Array(t.rating)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>

              <p className="mt-4 text-sm italic text-gray-600">
                “{t.feedback}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
