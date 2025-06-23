import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBg from "../assets/HeroSectionBG.jpeg"

const Home = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-scroll logic here
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Services data
  const services = [
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence',
      shortDescription: 'AI: Revolutionizing industries, learning, deciding, reshaping tech, and human interaction for a smarter future.',
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      shortDescription: 'Take your business to new heights with our Cloud Computing solutions. Unravel the benefits, tackle challenges, and embrace future trends in cloud technology for growth and innovation.',
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      shortDescription: 'Blockchain: Revolutionizing trust and security in transactions, powering decentralized systems for a transparent and tamper-resistant digital future.',
    }
  ];
// testimonials data
  const testimonials = [
    {
      id: 1,
      author: 'John Ciflin',
      position: 'Abc @ ABC company',
      rating: 5,
      content: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
      id: 2,
      author: 'John Ciflin',
      position: 'Director, ABC company',
      rating: 5,
      content: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
      id: 3,
      author: 'John Ciflin',
      position: 'CEO, ABC company',
      rating: 5,
      content: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }
  ];
  //why choose us card datas
  const whyChooseUs = [
    {
      icon: '❓',
      title: 'Uninterrupted Excellence: How Our 24/7 Support Ensures Round-the-Clock Operations.',
      description: 'Explore the robust support system ensuring your operations run seamlessly, backed by our dedicated 24/7 experts.'
    },
    {
      icon: '💪🏻',
      title: 'Empowering Your Team: The Impact of Personalized Training on Learning Experiences.',
      description: 'Delve into how strategically tailored training programs enhance the skills, knowledge, and productivity of your team members.'
    },
    {
      icon: '🎯',
      title: 'Success Partners: The Value of a Dedicated Support Team and On-Site Assistance.',
      description: 'Discover how our dedicated support team becomes an extension of your success and brings solutions directly to you.'
    },
    {
      icon: '✔️',
      title: 'Efficiency Amplified: Seamless Integration of ERP, CRM, and LMS for Streamlined Operations.',
      description: 'Explore the transformative power of integrating essential systems for enhanced efficiency in your institution.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        {/* Background image, only visible if heroBg is imported */}
        {typeof heroBg !== 'undefined' && heroBg && (
          <img
            src={heroBg}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ pointerEvents: 'none' }}
          />
        )}
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center animate-fade-in my-20">
          <Link
              to=""
              className="inline-block bg-white opacity-70 border-black text-primary-600 px-2 py-2 rounded-xl text-sm mb-8 font-semibold hover:bg-primary-50 hover:text-primary-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              See what we offer ↗
            </Link>
            <h1 className="text-4xl md:text-5xl text-primary-800 font-bold mb-6 leading-tight">
              Welcome to the future of green innovation.<br />
            </h1>
            <p className="text-xl md:text-lg mb-8 text-black max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-xl text-gray-600 mb-2">Why Choose Us?</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We have been running many successful business studios.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              It's crafted with the latest trend of design & coded with all modern approaches. It's a robust & multi-dimensional usable template.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-left border border-gray-200 shadow-xl slide-up">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-xl text-gray-600 mb-2">Our services</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What we offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.shortDescription}</p>
                <button className="mt-auto bg-gradient-to-r from-primary-900 to-primary-500 text-white py-2 px-6 rounded-lg shadow hover:opacity-90 transition-all">
                  Learn more ↗
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary-800 to-primary-500 text-white px-8 py-3 rounded-lg shadow hover:opacity-90 transition-all">
              Explore our services ↗
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 ml-5 mr-5 mb-5 border border-gray-500 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-5xl md:text-5xl font-bold text-gray-600 mb-4">
              With over <span className='text-4xl md:text-5xl font-bold text-gray-900'>104</span> clients around the world.
            </h2>
            <p className="text-xl font-semibold text-gray-900">
              See what people think about us.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-block bg-gradient-to-r from-primary-800 to-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              See more reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get a Callback from Springreen
            </h2>
            <form onSubmit={handleSubmit} className="max-w mx-auto flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button
                type="submit"
                className="bg-primary-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-all duration-300 hover:scale-105"
              >
                Submit
              </button>
              
            </form>
            <p className="text-sm text-primary-100 mb-8 mt-5">
              Lorem ipsum dolor sit amet consectetur. Dictumst nisl orci nam tortor fusce donec viverra id.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;