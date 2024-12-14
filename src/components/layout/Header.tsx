import React from 'react';
import { FileText, Github, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Markdown Pro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#editor" className="text-gray-600 hover:text-blue-600">Editor</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#guide" className="text-gray-600 hover:text-blue-600">Guide</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Github className="w-5 h-5" />
            </a>
            <button className="text-gray-600 hover:text-blue-600">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;