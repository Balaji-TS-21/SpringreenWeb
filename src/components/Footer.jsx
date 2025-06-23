import { Link } from 'react-router-dom';

// Footer Component with Company Information and Links
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    contact: [
      { name: 'Contact support', href: '/contact' },
      { name: 'Contact sales', href: '/contact' },
      { name: 'Call +91 1234567890', href: 'tel:+911234567890' },
    ],
    support: [
      { name: 'Calendly', href: '#' },
      { name: 'Ticket', href: '#' },
      { name: 'System safety', href: '#' },
      { name: 'Trust & Safety', href: '#' },
    ],
    resources: [
      { name: 'Case studies', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Customers', href: '#' },
      { name: 'APIs', href: '#' },
    ],
    aboutUs: [
      { name: 'Careers', href: '/careers' },
      { name: 'Springreen', href: '/about' },
      { name: 'Insights', href: '/insights' },
      { name: 'Privacy policy', href: '#' },
      { name: 'Terms & conditions', href: '#' },
      { name: 'Feedback', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M18.77 7.46H15.5v-1.9c0-.9.6-1.1 1-1.1h2.68V2.5h-3.4c-2.8 0-4.4 2.1-4.4 5.1v1.9h-2.3v1.9h2.3v10.2h3.12V9.4h2.6l.38-1.94z' },
    { name: 'Twitter', href: '#', icon: 'M23.32 4.56c-.8.37-1.5.38-2.22.02.93-.56.82-1.17.82-1.17-.85.5-1.78.85-2.78 1.05-.8-.85-1.94-1.38-3.2-1.38-2.42 0-4.38 1.96-4.38 4.38 0 .34.04.67.11.98-3.64-.18-6.87-1.93-9.03-4.58-.38.65-.59 1.41-.59 2.22 0 1.52.77 2.86 1.94 3.64-.72-.02-1.39-.22-1.98-.55v.06c0 2.12 1.51 3.89 3.51 4.29-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.56 1.75 2.18 3.02 4.1 3.06-1.5 1.18-3.39 1.88-5.44 1.88-.35 0-.7-.02-1.04-.06 1.94 1.24 4.24 1.96 6.72 1.96 8.05 0 12.46-6.67 12.46-12.46 0-.19 0-.37-.01-.56.86-.62 1.6-1.39 2.18-2.27z' },
    { name: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  ];

  return (
    <footer className="bg-primary-800 text-white ">
      <div className="max-w-9xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl text-white font-bold mb-5 block">
              Springreen
            </Link>
            <p className="text-green-200 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dictumst nisl orci nam tortor fusce donec viverra id.
            </p>
          </div>

          {/* Contact Section */}
          <div className='ml-10'>
            <h3 className="text-lg font-bold mb-4 ">Contact</h3>
            <ul className="space-y-2">
              {footerSections.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-green-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className='ml-10'>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerSections.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-green-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className='ml-10'>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerSections.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-green-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Section */}
          <div className='ml-10'>
            <h3 className="text-lg font-bold mb-4">About us</h3>
            <ul className="space-y-2">
              {footerSections.aboutUs.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-green-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-primary-200 text-sm text-center -ml-40 w-full">
            <p>SPRINGREEN . SPRINGVGREEN CONSULTANCY PRIVATE LIMITED | {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;