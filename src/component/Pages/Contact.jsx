import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const markerIcon = new Icon({
    iconUrl: './icon.png', // You can use a custom icon or default
    iconSize: [41, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center max-w-2xl mx-auto mb-10">
        Have questions or feedback? We’d love to hear from you. Fill out the form or reach out using the info below.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info & Map */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Office Address</h2>
            <p>Mirpur, Dhaka, Bangladesh</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p>01747-311512</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p>asibur70@gmail.com</p>
          </div>

          {/* React Map */}
          <div className="h-64 rounded-md overflow-hidden border border-base-300">
            <MapContainer center={[23.806, 90.368]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[23.806, 90.368]} icon={markerIcon}>
                <Popup>ManageFlat Office - Mirpur, Dhaka</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-base-200 p-6 rounded-lg shadow-md">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone (Optional)</label>
            <input
              type="text"
              placeholder="+8801XXXXXXX"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              placeholder="Inquiry about rent, dashboard access, etc."
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

