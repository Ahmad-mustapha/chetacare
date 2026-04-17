import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-12">
      <h2 className="text-2xl font-bold text-[#101828] mb-4">Send Us Message</h2>
      <p className="text-[#475467] mb-10">
        Feel free to fill up the form and our team will get back to you within 24 hours.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-[#344054]">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-[#344054]">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-[#344054]">Message (Reason for contact)</label>
          <textarea
            id="message"
            rows={8}
            placeholder="Type your message here..."
            className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1A7A4A] text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-all shadow-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
