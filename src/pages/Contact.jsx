import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { branches } from "../datas/branches";
import FormBoxBg from "../assets/FormBoxBg.jpg";

// Contact Page Component with Form, Branch Locations, and FAQ
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How does your industry work to address social responsibility?",
      answer:
        "We prioritize social responsibility through sustainable practices, community engagement, and ethical business operations. Our green innovation initiatives focus on creating solutions that benefit both businesses and society.",
    },
    {
      id: 2,
      question: "What sets with your organization-based offerings?",
      answer:
        "Our organization-based offerings are tailored to each client's unique needs, combining cutting-edge technology with industry expertise. We provide comprehensive solutions from consultation to implementation and ongoing support.",
    },
    {
      id: 3,
      question: "How does your industry work to address social responsibility?",
      answer:
        "We maintain strict compliance with industry standards and regulations, implement robust quality assurance processes, and continuously monitor and improve our services to ensure the highest level of performance and reliability.",
    },
    {
      id: 4,
      question: "Does your company provide coaching for IT professionals?",
      answer:
        "Yes, we offer comprehensive training and coaching programs for IT professionals. Our programs cover the latest technologies, best practices, and industry trends to help professionals advance their careers and skills.",
    },
    {
      id: 5,
      question: "What support do you provide after project completion?",
      answer:
        "We provide ongoing support including maintenance, updates, technical assistance, and performance monitoring. Our support team is available to ensure your solutions continue to operate optimally after project completion.",
    },
  ];

  const contactOptions = [
    {
      title: "Customer support",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      title: "Email Support",
      description: "hello@springreen.in",
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: "Branch location",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    },
    {
      title: "Leave a review",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const openBranchModal = (branch) => {
    setSelectedBranch(branch);
  };

  const closeBranchModal = () => {
    setSelectedBranch(null);
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      {/* <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20 animate-fade-in">
            Get in Touch
          </h1>
        </div>
      </section> */}

      {/* Contact Form and Options Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 via-gray-300 to-teal-900 bg-opacity-30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          {/* form box */}
          <div
            className="bg-gray-200 bg-opacity-90 backdrop-blur-3xl p-8 rounded-3xl shadow-xl mt-20 bg-cover bg-center"
            style={{
              backgroundImage: `url(${FormBoxBg})`,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-5">
              {/* Contact Form */}
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-gray-100 mb-6 ">
                  Get in touch!
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 bg-gray-100 placeholder:text-green-950 text-green-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 border bg-gray-100 placeholder:text-green-950 text-green-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone no"
                      className="w-full px-4 py-3 border bg-gray-100 placeholder:text-green-950 text-green-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="w-full px-4 py-3 border bg-gray-100 placeholder:text-green-950 text-green-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Description"
                      rows="4"
                      className="w-full px-4 py-3 border bg-gray-100 placeholder:text-green-950 text-green-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-40 mt-3 bg-gradient-to-r from-primary-900 to-primary-500 text-white py-3 px-6 rounded-xl shadow hover:opacity-90 transition-all hover:scale-105"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Contact Options */}
              <div className="animate-slide-in-right">
                <h2 className="text-3xl font-bold text-gray-100 mb-6">
                  Contact us
                </h2>
                <div className="flex items-center gap-8 text-white text-base font-bold my-5">
                  {/* Phone */}
                  <div className="flex items-center gap-2">
                    <Phone size={20} />
                    <span>+91 7604907896</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2">
                    <Mail size={20} />
                    <span>hello@springgreen.in</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {contactOptions.map((option, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {/* Arrow icon at top-right */}
                      <div className="absolute top-4 right-4">
                        <svg
                          className="w-5 h-5 text-gray-700 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {option.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our branches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <div
                key={branch.id}
                className="bg-gray-200 p-6 rounded-lg text-center cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openBranchModal(branch)}
              >
                <div className="h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1011.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {branch.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{branch.phone}</p>
                <p className="text-sm text-gray-600">{branch.email}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center text-primary-600 hover:text-primary-700">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* FAQ Main */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-slide-up">
                Our Frequently asked Questions (FAQs)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="bg-white border border-gray-200 rounded-lg animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center mt-auto bg-gradient-to-r from-gray-200 to-gray-300 text-white rounded-lg transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          openFaq === faq.id ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openFaq === faq.id && (
                      <div className="px-6 pb-4 py-6">
                        <p className="text-gray-800 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Other FAQs
              </h3>
              <div className="space-y-3">
                {["Client", "Employees", "User 2"].map((category) => (
                  <div
                    key={category}
                    className="bg-white p-4 rounded-lg border border-gray-200 cursor-pointer hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">
                        {category}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-90vh overflow-y-auto animate-bounce-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedBranch.name}
                </h2>
                <button
                  onClick={closeBranchModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Branch Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1011.314 0z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {selectedBranch.address}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {selectedBranch.phone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {selectedBranch.email}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-8">
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="text-gray-900">
                        {selectedBranch.hours.weekdays}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="text-gray-900">
                        {selectedBranch.hours.saturday}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="text-gray-900">
                        {selectedBranch.hours.sunday}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Location
                  </h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedBranch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${selectedBranch.name} location`}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
