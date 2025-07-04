import React from 'react';
import { Target, Heart, Shield, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in putting our community at the heart of everything we do.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your financial security is our top priority with bank-level encryption.'
    },
    {
      icon: Users,
      title: 'Inclusive Growth',
      description: 'Financial services accessible to everyone, regardless of background.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Focused on measurable outcomes that improve lives and businesses.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '50+', label: 'Communities Served' },
    { number: '10,000+', label: 'Lives Impacted' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Credex Micro Credit
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2008, Credex Micro Credit has been at the forefront of financial inclusion, 
              providing accessible and affordable financial services to underserved communities and 
              small businesses across the region.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower individuals and small businesses to achieve financial 
              independence through innovative microfinance solutions, comprehensive financial 
              education, and unwavering community support.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Financial consultation" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Microfinance Institution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Our Mission & Vision
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-blue-300">Mission</h4>
                  <p className="text-gray-300 leading-relaxed">
                    To provide accessible, affordable, and innovative financial services that 
                    empower individuals and small businesses to build sustainable livelihoods 
                    and contribute to economic growth in their communities.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-green-300">Vision</h4>
                  <p className="text-gray-300 leading-relaxed">
                    To become the leading microfinance institution that creates lasting 
                    positive impact by fostering financial inclusion and economic empowerment 
                    across underserved communities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-3">Global Impact</h4>
                <p className="text-gray-300">
                  Part of a global movement working towards financial inclusion and 
                  sustainable development goals.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <h4 className="text-xl font-semibold mb-3">Community Focus</h4>
                <p className="text-gray-300">
                  Deep roots in local communities with culturally sensitive and 
                  locally relevant financial solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;