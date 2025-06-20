import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      title: "Location",
      details: ["123 Culinary Street", "Downtown District", "New York, NY 10001"]
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-600" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Reservations: +1 (555) 123-4568"]
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-600" />,
      title: "Email",
      details: ["reservations@savoria.com", "info@savoria.com"]
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      title: "Hours",
      details: ["Mon-Thu: 5:00 PM - 10:00 PM", "Fri-Sat: 5:00 PM - 11:00 PM", "Sun: 5:00 PM - 9:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit <span className="text-amber-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We look forward to welcoming you for an unforgettable dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    {info.icon}
                    <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Special Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Calendar className="h-6 w-6 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900">Reservations</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We recommend making reservations in advance, especially for weekend dining. 
                Walk-ins are welcome based on availability.
              </p>
              <button className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Make Reservation
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-full min-h-[500px] bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Interactive Map</p>
                <p className="text-gray-400 text-sm">123 Culinary Street, Downtown District</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold text-lg hover:bg-amber-700 transition-all hover:scale-105 shadow-lg">
              Book a Table
            </button>
            <button className="px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-full font-semibold text-lg hover:bg-amber-600 hover:text-white transition-all">
              Order Takeout
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-gray-400 transition-all">
              Private Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;