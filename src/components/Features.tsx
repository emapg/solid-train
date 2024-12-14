import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    'GitHub Flavored Markdown support',
    'Real-time preview',
    'Syntax highlighting for code blocks',
    'Copy to clipboard functionality',
    'Responsive design',
    'Split-screen editing',
    'Support for tables and task lists',
    'Image embedding',
    'Custom styling options'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-white rounded-lg shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;