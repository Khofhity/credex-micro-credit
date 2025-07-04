import React from 'react';
import { 
  DollarSign, 
  PiggyBank, 
  GraduationCap, 
  Building2, 
  Users, 
  Smartphone,
  CreditCard,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: 'Microloans',
      description: 'Small business loans from $500 to $50,000 with flexible repayment terms and competitive interest rates.',
      features: ['No collateral required', 'Fast approval process', 'Flexible terms'],
      color: 'bg-blue-500'
    },
    {
      icon: PiggyBank,
      title: 'Savings Programs',
      description: 'Build financial security with our high-yield savings accounts and goal-oriented savings plans.',
      features: ['High interest rates', 'No minimum balance', 'Goal tracking'],
      color: 'bg-green-500'
    },
    {
      icon: GraduationCap,
      title: 'Financial Education',
      description: 'Free workshops and resources to help you make informed financial decisions and grow your business.',
      features: ['Free workshops', 'One-on-one counseling', 'Online resources'],
      color: 'bg-purple-500'
    },
    {
      icon: Building2,
      title: 'Business Development',
      description: 'Comprehensive support for entrepreneurs including business planning and mentorship programs.',
      features: ['Business planning', 'Mentorship', 'Market analysis'],
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Group Lending',
      description: 'Community-based lending circles that provide mutual support and shared responsibility.',
      features: ['Community support', 'Lower rates', 'Shared responsibility'],
      color: 'bg-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Banking',
      description: 'Convenient mobile app for account management, payments, and loan applications on the go.',
      features: ['24/7 access', 'Secure transactions', 'Real-time updates'],
      color: 'bg-indigo-500'
    },
    {
      icon: CreditCard,
      title: 'Credit Building',
      description: 'Help establish and improve your credit score through responsible lending and reporting.',
      features: ['Credit reporting', 'Score monitoring', 'Improvement tips'],
      color: 'bg-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Professional guidance on investment opportunities and portfolio management for growing wealth.',
      features: ['Expert advice', 'Portfolio management', 'Risk assessment'],
      color: 'bg-cyan-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet the diverse needs of individuals 
            and small businesses in underserved communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of satisfied customers who have transformed their financial future with Credex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Apply for Loan
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;