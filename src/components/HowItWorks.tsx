import React from 'react';
import { FileText, Search, CheckCircle, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Apply Online',
      description: 'Complete our simple online application form with basic information about yourself and your financial needs.',
      details: ['Personal information', 'Financial details', 'Loan purpose', 'Supporting documents']
    },
    {
      icon: Search,
      title: 'Quick Review',
      description: 'Our team reviews your application using our advanced scoring system and conducts a brief verification process.',
      details: ['Credit assessment', 'Income verification', 'Risk evaluation', 'Eligibility check']
    },
    {
      icon: CheckCircle,
      title: 'Get Approved',
      description: 'Receive approval notification within 24-48 hours with personalized loan terms and conditions.',
      details: ['Approval notification', 'Loan terms', 'Interest rates', 'Repayment schedule']
    },
    {
      icon: CreditCard,
      title: 'Receive Funds',
      description: 'Once you accept the terms, funds are disbursed directly to your account within 1-2 business days.',
      details: ['Fund transfer', 'Account setup', 'Repayment plan', 'Ongoing support']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to access the financial support you need. 
            From application to funding, we've simplified every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="w-0 h-0 border-l-4 border-l-green-500 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute -right-1 -top-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Process?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fast & Efficient</h4>
                    <p className="text-gray-600">Get approved in as little as 24 hours with our streamlined process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transparent Terms</h4>
                    <p className="text-gray-600">No hidden fees or surprises - everything is clearly explained upfront.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Support</h4>
                    <p className="text-gray-600">Dedicated support team to guide you through every step of the process.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 mb-6">
                  Join thousands of satisfied customers who have secured their financial future with Credex.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 font-medium">
                  Start Your Application
                </button>
                <div className="mt-4 text-sm text-gray-500">
                  Average processing time: 24-48 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;