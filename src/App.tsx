import React from 'react';
import { FileText } from 'lucide-react';
import MarkdownEditor from './components/MarkdownEditor';
import Features from './components/Features';
import Guide from './components/Guide';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Markdown Converter</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Text with Markdown
            </h2>
            <p className="text-lg text-gray-600">
              A powerful markdown editor with real-time preview and advanced features
            </p>
          </div>

          <MarkdownEditor />
        </div>

        <Features />
        <Guide />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            Built with React and TypeScript. Use Markdown to create beautifully formatted content.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;