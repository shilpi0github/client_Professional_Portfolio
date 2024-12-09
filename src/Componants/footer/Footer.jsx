import React from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  const handleLinkClick = (linkName) => {
    alert(`You clicked on ${linkName}`);
  }

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {getCurrentYear()} Your Company. All rights reserved.</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            <button onClick={() => handleLinkClick('Privacy Policy')} className="text-gray-400 hover:text-white">Privacy Policy</button>
            <button onClick={() => handleLinkClick('Terms of Service')} className="text-gray-400 hover:text-white">Terms of Service</button>
            <button onClick={() => handleLinkClick('Contact Us')} className="text-gray-400 hover:text-white">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
