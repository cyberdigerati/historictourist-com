import React, { useState } from 'react';

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Submit to our own API endpoint instead of directly to Web3Forms
      const response = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError(
        'There was a problem submitting your inquiry. Please try again or email us directly at admin@historictourist.com'
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-sm rounded">
        <h3 className="text-2xl text-white mb-4">Thank You</h3>
        <p className="text-gray-200">
          Your collaboration inquiry has been received. We'll be in touch
          shortly to explore how we can work together to bring authentic
          heritage experiences to travelers.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded"
    >
      <h3 className="text-2xl text-white mb-6 font-light">
        Collaboration Inquiries
      </h3>

      {error && (
        <div className="mb-4 p-3 bg-red-900 bg-opacity-50 text-white">
          {error}
        </div>
      )}

      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 bg-transparent border border-gray-300 text-white placeholder-gray-300"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 bg-transparent border border-gray-300 text-white placeholder-gray-300"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="company"
          placeholder="Organization/Institution (Optional)"
          className="w-full p-3 bg-transparent border border-gray-300 text-white placeholder-gray-300"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          placeholder="Tell us about your heritage site, local expertise, or how you'd like to collaborate with Historic Tourist..."
          rows="4"
          className="w-full p-3 bg-transparent border border-gray-300 text-white placeholder-gray-300"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full border border-white hover:bg-white hover:text-green-900 text-white py-3 transition duration-300 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Collaboration Inquiry'}
      </button>
    </form>
  );
}

export default InquiryForm;
