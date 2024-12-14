import React from 'react';
import { Download, Copy, Check } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface PreviewPaneProps {
  html: string;
  markdown: string;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ html, markdown }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-end space-x-2 p-2 border-b border-gray-200">
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
        <button
          onClick={handleDownload}
          className="flex items-center px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
        >
          <Download className="w-4 h-4 mr-1" />
          Download
        </button>
      </div>
      <div
        className="flex-1 p-4 overflow-auto prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default PreviewPane;