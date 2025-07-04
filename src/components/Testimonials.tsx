import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Small Business Owner',
      business: 'Rosa\'s Bakery',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Credex helped me expand my bakery with a $15,000 loan. The process was smooth, and their support team was incredible. My business has grown by 200% since then!',
      result: 'Business grew 200%'
    },
    {
      name: 'James Chen',
      role: 'Entrepreneur',
      business: 'Tech Repair Shop',
      image: 'https://images.pexels.com/photos/3182806/pexels-photo-3182806.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'I needed capital to buy equipment for my repair shop. Credex not only provided the loan but also gave me valuable business advice. Highly recommend!',
      result: 'Equipment purchased'
    },
    {
      name: 'Sarah Johnson',
      role: 'Freelancer',
      business: 'Design Studio',
      image: 'https://images.pexels.com/photos/3182813/pexels-photo-3182813.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The financial education workshops were game-changing. I learned how to manage my finances better and got a loan to start my design studio.',
      result: 'Studio launched'
    },
    {
      name: 'Michael Thompson',
      role: 'Farmer',
      business: 'Green Valley Farm',
      image: 'https://images.pexels.com/photos/3182825/pexels-photo-3182825.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Credex\'s agricultural loans helped me modernize my farm. The flexible repayment terms aligned perfectly with my seasonal income.',
      result: 'Farm modernized'
    },
    {
      name: 'Ana Martinez',
      role: 'Craft Maker',
      business: 'Handmade Jewelry',
      image: 'https://images.pexels.com/photos/3182810/pexels-photo-3182810.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Starting my jewelry business seemed impossible until I found Credex. They believed in my vision and provided the support I needed to succeed.',
      result: 'Online store launched'
    },
    {
      name: 'David Kim',
      role: 'Restaurant Owner',
      business: 'Seoul Kitchen',
      image: 'https://images.pexels.com/photos/3182817/pexels-photo-3182817.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The group lending program connected me with other entrepreneurs. We supported each other while building our businesses. Amazing community!',
      result: 'Restaurant opened'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives and businesses 
            with Credex Micro Credit. Join thousands of satisfied customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed italic mb-4 pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Result:</span>
                  <span className="text-sm font-medium text-green-600">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of entrepreneurs and individuals who have achieved their financial goals with Credex.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Start Your Application
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Read More Stories
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-75">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm opacity-75">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$50M+</div>
              <div className="text-sm opacity-75">Disbursed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;