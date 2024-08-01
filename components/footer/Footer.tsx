import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#d33a2c] text-white py-8 mt-8">
      <div className="container px-10 flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Just For Quotes</h2>
          </div>
        </Link>

        <div className="flex  space-x-4">
          &copy; 1994 - {currentYear} All Rights Reserved
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <p>Follow Us</p>
          <a
            href="https://www.facebook.com/profile.php?id=61563565883613&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/babynamenestlings/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="flex mt-4 md:mt-0 gap-2">
          <Link href="/about">
            <p className="underline">About</p>
          </Link>
          <Link href="/about/privacy">
            <p className="underline">Privacy</p>
          </Link>
          <Link href="/about/contact">
            <p className="underline">Contact</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
