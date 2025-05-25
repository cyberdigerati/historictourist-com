import React, { useState } from 'react';
import InquiryForm from './InquiryForm';
import PrivacyPolicy from './PrivacyPolicy';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-y-auto">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 animate-gradient-x"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center pb-32">
          <div className="mb-8">
            <div className="mx-auto w-20 h-20 mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-content text-3xl">
              🏛️
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
              HISTORICTOURIST.COM
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            The Future of Heritage Travel
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto font-light">
            Discover authentic cultural experiences through immersive
            storytelling and exclusive access to heritage destinations.
          </p>
          <p className="text-2xl md:text-3xl text-yellow-300 mb-10 font-light">
            Join the Revolution in Heritage Tourism - Building the World's
            Premier Cultural Travel Platform
          </p>
          {showInquiryForm ? (
            <div className="w-full max-w-xl mx-auto px-4">
              <InquiryForm />
            </div>
          ) : (
            <button
              onClick={() => setShowInquiryForm(true)}
              className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-none transition duration-300 text-lg tracking-wide"
            >
              Partnership Inquiries
            </button>
          )}
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            Redefining Heritage Tourism
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Immersive Storytelling',
                description:
                  'Every destination comes alive through compelling narratives and local legends.',
              },
              {
                title: 'Local Partnerships',
                description:
                  'Exclusive access through authentic community connections.',
              },
              {
                title: 'Ancestry Tourism',
                description:
                  'Personalized genealogy trips connecting travelers to their roots.',
              },
              {
                title: 'AR/VR Experiences',
                description:
                  'Historical overlays and virtual previews bring the past to life.',
              },
              {
                title: 'AI Personalization',
                description:
                  'Custom itineraries based on interests and heritage.',
              },
              {
                title: 'Sustainable Tourism',
                description:
                  'Protecting heritage sites while benefiting local communities.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 border border-gray-100 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl text-blue-800 mb-4 font-normal">
                  {item.title}
                </h3>
                <p className="text-gray-600 italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HistoricTourist Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            Why HistoricTourist.com?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl text-blue-800 mb-3">The Platform</h3>
              <p className="text-gray-700">
                Comprehensive heritage travel marketplace with global reach
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-blue-800 mb-3">The Technology</h3>
              <p className="text-gray-700">
                AI-powered personalization, VR/AR, and mobile-first design
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-blue-800 mb-3">The Community</h3>
              <p className="text-gray-700">
                Local historians, cultural institutions, and heritage
                enthusiasts worldwide
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-blue-800 mb-3">The Mission</h3>
              <p className="text-gray-700">
                Connecting travelers with authentic cultural experiences and
                their ancestral heritage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">
            Building the world's most comprehensive heritage travel platform.
          </p>
          <p className="mb-8">
            Connecting heritage, culture, and community through authentic travel
            experiences.
          </p>
          <p className="text-yellow-300">
            Ready to launch the future of cultural tourism.
          </p>

          <div className="mt-12 text-sm">
            <p>© 2025 HistoricTourist.com</p>
            <div className="mt-6 text-xs">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-gray-400 hover:text-gray-200 underline"
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
      <Analytics />
    </div>
  );
}

export default App;
