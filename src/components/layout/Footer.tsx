import React from 'react';
import { Heart, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              A powerful markdown editor built with React and TypeScript.
              Create beautifully formatted content with ease.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#editor" className="text-gray-600 hover:text-blue-600">Editor</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a href="#guide" className="text-gray-600 hover:text-blue-600">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React and TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;