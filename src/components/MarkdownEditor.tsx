import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy, Check, FileText, Code, Eye } from 'lucide-react';
import 'highlight.js/styles/github-dark.css';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');

  useEffect(() => {
    marked.setOptions({
      breaks: true,
      gfm: true,
      highlight: function (code, lang) {
        const hljs = require('highlight.js');
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    });
    setPreview(marked(markdown));
  }, [markdown]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center border-b border-gray-200 px-4 py-3">
          <button
            onClick={() => setActiveTab('write')}
            className={\`flex items-center px-4 py-2 \${
              activeTab === 'write'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }\`}
          >
            <FileText className="w-4 h-4 mr-2" />
            Write
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={\`flex items-center px-4 py-2 \${
              activeTab === 'preview'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }\`}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </button>
          <div className="ml-auto">
            <CopyToClipboard text={markdown} onCopy={handleCopy}>
              <button className="flex items-center px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                {copied ? (
                  <Check className="w-4 h-4 mr-1 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </CopyToClipboard>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 h-[600px]">
          <div className={activeTab === 'write' ? 'block' : 'hidden md:block'}>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-full p-4 bg-gray-50 font-mono text-sm resize-none focus:outline-none"
              placeholder="Enter your markdown here..."
            />
          </div>
          <div
            className={\`border-l border-gray-200 \${
              activeTab === 'preview' ? 'block' : 'hidden md:block'
            }\`}
          >
            <div
              className="prose max-w-none p-4 h-full overflow-auto"
              dangerouslySetInnerHTML={{ __html: preview }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;