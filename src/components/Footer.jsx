import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const socialLinks = [
  { href: "https://facebook.com/SoltechAfrica", icon: <FaFacebook />, label: "Facebook" },
  { href: "https://instagram.com/SoltechAfrica", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://youtube.com/SoltechAfrica", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://linkedin.com/company/SoltechAfrica", icon: <FaLinkedin />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="w-screen py-8 text-gray-300 bg-black">
      <div className="container flex flex-col gap-8 px-4 mx-auto md:flex-row md:justify-between">
        {/* Brand and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold text-white">Soltech</h3>
          <p className="max-w-sm mt-2 text-sm text-center md:text-left">
            Redefining Africa's tech ecosystem with innovative Tech Training, immersive Gaming, and collaborative Workspaces.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-2 text-lg font-medium text-white">Our Services</h4>
          <ul className="flex flex-col gap-2 text-sm text-center md:text-left">
            <li>
              <Link
                to="/tech-training"
                className="transition-colors duration-300 hover:text-gray-500"
              >
                Tech Training
              </Link>
            </li>
            <li>
              <Link
                to="/gaming"
                className="transition-colors duration-300 hover:text-gray-500"
              >
                Gaming
              </Link>
            </li>
            <li>
              <Link
                to="/workspaces"
                className="transition-colors duration-300 hover:text-gray-500"
              >
                Workspaces & Hubs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="mb-2 text-lg font-medium text-white">Quick links</h4>
          <ul className="flex flex-col gap-2 text-sm text-center md:text-left">
            <li>
              <Link
                to="/register"
                className="transition-colors duration-300 hover:text-gray-500"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition-colors duration-300 hover:text-gray-500"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/membership"
                className="transition-colors duration-300 hover:text-gray-500"
              >
                Membership
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="mb-2 text-lg font-medium text-white">Stay Connected</h4>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl transition-colors duration-300 hover:text-gray-500"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm">
            Email:{" "}
            <a
              href="mailto:contact@soltechafrica.com"
              className="font-medium transition-colors duration-300 hover:text-gray-500"
            >
              contact@soltechafrica.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+237670349922"
              className="font-medium transition-colors duration-300 hover:text-gray-500"
            >
              +237 670 349 922
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-4 mt-8 border-t border-gray-700">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto text-sm md:flex-row">
          <p className="text-center md:text-left">
            © 2024 Soltech. Innovating Africa, one step at a time.
          </p>
          <Link
            to="/privacy-policy"
            className="text-center hover:underline md:text-right"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;