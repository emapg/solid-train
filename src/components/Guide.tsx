import React from 'react';
import { BookOpen } from 'lucide-react';

const Guide: React.FC = () => {
  const examples = [
    {
      title: 'Headers',
      markdown: '# H1\n## H2\n### H3',
      description: 'Create headers using # symbols'
    },
    {
      title: 'Emphasis',
      markdown: '*italic* or _italic_\n**bold** or __bold__',
      description: 'Style text with asterisks or underscores'
    },
    {
      title: 'Lists',
      markdown: '1. First item\n2. Second item\n\n- Unordered item\n- Another item',
      description: 'Create ordered and unordered lists'
    },
    {
      title: 'Code',
      markdown: '`inline code`\n```javascript\nconst code = "block";\n```',
      description: 'Format code with backticks'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold">How to Use</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
              <p className="text-gray-600 mb-4">{example.description}</p>
              <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <code>{example.markdown}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;