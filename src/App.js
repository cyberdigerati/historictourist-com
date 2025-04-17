import React, { useState } from 'react';
import InquiryForm from './InquiryForm';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-y-auto">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-green-900 via-gray-800 to-gray-900 animate-gradient-x"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center pb-32">
          {' '}
          {/* Increased padding */}
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Environmental Design"
              className="mx-auto w-40 h-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
              ENVIRONMENTALDESIGN.COM
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            Where Environment Meets Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto font-light">
            This is not just a domain. It's a movement waiting to be ignited.
          </p>
          <p className="text-2xl md:text-3xl text-green-300 mb-10 font-light">
            $2,500,000
          </p>
          {showInquiryForm ? (
            <div className="w-full max-w-xl mx-auto px-4">
              <InquiryForm />
            </div>
          ) : (
            <button
              onClick={() => setShowInquiryForm(true)}
              className="border border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-none transition duration-300 text-lg tracking-wide"
            >
              Inquire for Private Acquisition
            </button>
          )}
        </div>
      </section>

      {/* Vision Carousel Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            The Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Smart Cities',
                description: 'Designing the future, one system at a time.',
              },
              {
                title: 'Regenerative Architecture',
                description: 'Buildings that heal the earth.',
              },
              {
                title: 'Academic Vanguard',
                description:
                  "A hub for tomorrow's leaders in sustainable design.",
              },
              {
                title: 'Climate Capital',
                description: 'Where money meets meaning.',
              },
              {
                title: 'AI + Ecology',
                description: 'A neural network for the natural world.',
              },
              {
                title: 'Design Revolution',
                description: 'Reimagining our relationship with the planet.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 border border-gray-100 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl text-green-800 mb-4 font-normal">
                  {item.title}
                </h3>
                <p className="text-gray-600 italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            Why EnvironmentalDesign.com?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl text-green-800 mb-3">The Domain</h3>
              <p className="text-gray-700">
                100% premium, dictionary-grade, brandable
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-green-800 mb-3">The Opportunity</h3>
              <p className="text-gray-700">
                Own the narrative, define the space, lead the movement
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-green-800 mb-3">The Audience</h3>
              <p className="text-gray-700">
                From academia to enterprise, a global convergence
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-green-800 mb-3">The Future</h3>
              <p className="text-gray-700">
                A singular address for the entire environmental design
                revolution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">
            This is a privately held digital asset. All rights reserved.
          </p>
          <p className="mb-8">
            Not affiliated with any third-party company or platform.
          </p>
          <p className="text-gray-300">
            Now accepting inquiries for strategic acquisition.
          </p>

          <div className="mt-12 text-sm">
            <p>© 2025 EnvironmentalDesign.com</p>
            <div className="mt-6 text-xs">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-gray-500 hover:text-gray-300 underline"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
    </div>
  );
}

export default App;
