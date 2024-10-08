import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Terminal, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <nav className="bg-white dark:bg-black p-4 transition-colors duration-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Terminal className="text-blue-600 dark:text-green-400 mr-2 h-8 w-8" />
          <span className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-green-400">Hack Interview AI</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/interview-copilot" className="nav-link">Interview Copilot</Link>
          <Link href="/resume-builder" className="nav-link">AI Resume Builder</Link>
          <Link href="/mock-interview" className="nav-link">AI Mock Interview</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/question-bank" className="nav-link">Question Bank</Link>
          <Link href="/signin" className="btn">Sign In</Link>
          <Link href="/signup" className="btn">Sign Up</Link>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-green-900 transition-colors duration-200">
            {theme === 'light' ? <Moon className="text-gray-800" /> : <Sun className="text-green-400" />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-green-900 mr-2 transition-colors duration-200">
            {theme === 'light' ? <Moon className="text-gray-800" /> : <Sun className="text-green-400" />}
          </button>
          <button onClick={toggleMenu} className="text-gray-800 dark:text-green-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/interview-copilot" className="block nav-link py-2">Interview Copilot</Link>
          <Link href="/resume-builder" className="block nav-link py-2">AI Resume Builder</Link>
          <Link href="/mock-interview" className="block nav-link py-2">AI Mock Interview</Link>
          <Link href="/resources" className="block nav-link py-2">Resources</Link>
          <Link href="/question-bank" className="block nav-link py-2">Question Bank</Link>
          <Link href="/signin" className="block btn my-2">Sign In</Link>
          <Link href="/signup" className="block btn my-2">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;