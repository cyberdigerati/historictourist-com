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
          <div className="w-full h-full bg-gradient-to-r from-black via-gray-900 to-black animate-gradient-x"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center pb-32">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Historic Tourist"
              className="mx-auto w-48 h-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
              HISTORICTOURIST.COM
            </h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
            A Human-Curated Platform for Heritage, Culture & Meaningful Travel
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-4xl mx-auto font-light">
            Discover the Past. Travel with Purpose.
          </p>
          <p className="text-lg md:text-xl text-yellow-300 mb-10 font-light max-w-3xl mx-auto">
            Thoughtfully built for travelers who seek more than checklists and
            photo ops — explore the world's cultural soul through real stories,
            enduring places, and the people who keep them alive.
          </p>
          {showInquiryForm ? (
            <div className="w-full max-w-xl mx-auto px-4">
              <InquiryForm />
            </div>
          ) : (
            <button
              onClick={() => setShowInquiryForm(true)}
              className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-none transition duration-300 text-lg tracking-wide"
            >
              Collaboration Inquiries
            </button>
          )}
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-6 font-light">
              What We're Creating
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              A curated, evolving guide to meaningful heritage travel — blending
              timeless destinations with modern tools for discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            Core Values That Shape Our Platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Human-Curated Content',
                description:
                  'Carefully selected destinations and stories, contributed by locals, historians, and travelers.',
              },
              {
                title: 'Immersive Storytelling',
                description:
                  'From folklore to architecture, each place comes to life through layered narratives.',
              },
              {
                title: 'Global in Scope, Local in Soul',
                description:
                  'Rooted in communities, partnerships, and cultural integrity.',
              },
              {
                title: 'Personalized Journeys',
                description:
                  'Custom itineraries based on your interests, ancestry, and curiosity — guided by AI but always grounded in human insight.',
              },
              {
                title: 'Places That Matter',
                description:
                  'Historic homes, gardens, monuments, landscapes, museums, and dining — all selected for their cultural depth.',
              },
              {
                title: 'Modern Tools, Timeless Focus',
                description:
                  'AR/VR previews, mobile-first design, and smart search that make planning simple, but never shallow.',
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

      {/* Experience Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            The Full Spectrum of Heritage Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Historic Sites & Monuments',
                description: 'Discover legacies that shaped civilizations',
              },
              {
                title: 'Cultural Landscapes & Gardens',
                description:
                  'Walk through designed environments that tell stories',
              },
              {
                title: 'Historic Lodging & Dining',
                description: 'Stay and dine where stories live on',
              },
              {
                title: 'Ancestry Tourism',
                description: 'Trace your roots with personalized journeys',
              },
              {
                title: 'Museums & Cultural Institutions',
                description:
                  'Engage with curated interpretation and authentic artifacts',
              },
              {
                title: 'Local Artisans & Traditions',
                description:
                  'Experience living culture through community connections',
              },
              {
                title: 'AR/VR Historical Experiences',
                description: 'See history layered over the present',
              },
              {
                title: 'Sustainable Cultural Tourism',
                description: 'Support preservation through conscious travel',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 text-center border border-gray-100 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-lg text-blue-800 mb-3 font-medium">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm italic">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Are Now Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            Where We Are Now
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 mb-8 font-light">
              We've walked the ground. We've listened to the stories.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We're beginning with Newport, Rhode Island — a place rich in
              legacy and layered with living history.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Follow along as we continue adding destinations, stories, and
              features — one thoughtful step at a time.
            </p>

            <div className="bg-white p-8 border border-gray-200 rounded-none">
              <h3 className="text-2xl text-blue-800 mb-4 font-light">
                Our Approach
              </h3>
              <p className="text-gray-600 italic">
                Depth over speed. Presence over promotion. Legacy over trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-black text-gray-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-8 font-light">
            Join Us
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of a growing community that values depth over speed,
            presence over promotion, and legacy over trends.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="https://instagram.com/historictourist"
              className="bg-yellow-500 text-black px-6 py-3 rounded-none hover:bg-yellow-400 transition duration-300 font-medium"
            >
              Follow @HistoricTourist on Instagram
            </a>

            <a
              href="mailto:admin@historictourist.com?subject=Launch Notification"
              className="border border-yellow-500 text-yellow-300 px-6 py-3 rounded-none hover:bg-yellow-500 hover:text-black transition duration-300 font-medium"
            >
              Notify Me at Launch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">
            Connecting heritage, culture, and community through authentic travel
            experiences.
          </p>
          <p className="mb-8">
            Building something meaningful, one story at a time.
          </p>

          <div className="mt-12 text-sm">
            <p>© 2025 HistoricTourist.com</p>
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
      <Analytics />
    </div>
  );
}

export default App;
