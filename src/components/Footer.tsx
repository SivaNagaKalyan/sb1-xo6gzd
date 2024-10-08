import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Youtube, MessageCircle, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-green-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-green-400">Hack Interview AI</h3>
            <p className="mb-4">Your trusted platform to ace any job interviews, craft the perfect resumes, and land your dream jobs.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 dark:text-green-400 dark:hover:text-green-300"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 dark:text-green-400 dark:hover:text-green-300"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 dark:text-green-400 dark:hover:text-green-300"><Youtube size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 dark:text-green-400 dark:hover:text-green-300"><MessageCircle size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black dark:text-green-400 dark:hover:text-green-300"><ExternalLink size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-green-400">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/interview-copilot" className="footer-link">Interview Copilot</Link></li>
              <li><Link href="/mock-interview" className="footer-link">AI Mock Interview</Link></li>
              <li><Link href="/resume-builder" className="footer-link">AI Resume Builder</Link></li>
              <li><Link href="/resources" className="footer-link">Resources</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-green-400">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link href="/how-it-works" className="footer-link">How Hack Interview AI works</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-green-400">Interview Questions</h3>
            <ul className="space-y-2">
              <li><Link href="/questions/career-ambition" className="footer-link">Common Career Ambition Questions</Link></li>
              <li><Link href="/questions/leadership" className="footer-link">Collaborative Leadership Questions</Link></li>
              <li><Link href="/questions/product-manager" className="footer-link">Product Manager Questions</Link></li>
              <li><Link href="/questions/coding" className="footer-link">Coding Interview Questions</Link></li>
              <li><Link href="/questions/technical" className="footer-link">Technical Interview Questions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center dark:text-green-400">© 2024 Hack Interview AI, 123 Tech Street, Silicon Valley, CA 94000</p>
          <div className="mt-4 text-sm text-center">
            <Link href="/privacy" className="footer-link mr-4">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;