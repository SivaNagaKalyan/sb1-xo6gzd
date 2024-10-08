import React from 'react';
import { Code, Cpu, Users } from 'lucide-react';
import Link from 'next/link';
import CompanySlider from './CompanySlider';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-green-400">Master Your Tech Interviews with AI</h1>
      <p className="text-xl md:text-2xl mb-8 font-semibold text-gray-600 dark:text-green-400">Hack Interview AI: Your ultimate companion for acing technical interviews</p>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-12">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Code className="text-4xl md:text-5xl mb-2 text-blue-600 dark:text-green-400" />
          <span className="text-lg md:text-xl font-semibold text-gray-700 dark:text-green-400">Practice Coding</span>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Cpu className="text-4xl md:text-5xl mb-2 text-blue-600 dark:text-green-400" />
          <span className="text-lg md:text-xl font-semibold text-gray-700 dark:text-green-400">AI-Powered Feedback</span>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Users className="text-4xl md:text-5xl mb-2 text-blue-600 dark:text-green-400" />
          <span className="text-lg md:text-xl font-semibold text-gray-700 dark:text-green-400">Mock Interviews</span>
        </div>
      </div>
      <Link href="/get-started" className="btn text-xl md:text-2xl mb-12">Get Started</Link>
      <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-green-400">300,000+ offers from the most exciting companies and organizations</p>
      <CompanySlider />
    </div>
  );
};

export default Hero;