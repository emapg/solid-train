import React from 'react';
import Toolbar from './Toolbar';

interface EditorPaneProps {
  value: string;
  onChange: (value: string) => void;
}

const EditorPane: React.FC<EditorPaneProps> = ({ value, onChange }) => {
  const handleToolbarAction = (action: string) => {
    let insertion = '';
    const textarea = document.querySelector('textarea');
    const start = textarea?.selectionStart || 0;
    const end = textarea?.selectionEnd || 0;
    const selectedText = value.substring(start, end);

    switch (action) {
      case 'bold':
        insertion = \`**\${selectedText || 'bold text'}**\`;
        break;
      case 'italic':
        insertion = \`_\${selectedText || 'italic text'}_\`;
        break;
      case 'list':
        insertion = \`\\n- \${selectedText || 'list item'}\`;
        break;
      case 'link':
        insertion = \`[\${selectedText || 'link text'}](url)\`;
        break;
      case 'code':
        insertion = \`\\\`\${selectedText || 'code'}\\\`\`;
        break;
      case 'image':
        insertion = \`![\${selectedText || 'alt text'}](image-url)\`;
        break;
      case 'quote':
        insertion = \`> \${selectedText || 'quote'}\`;
        break;
    }

    const newValue = value.substring(0, start) + insertion + value.substring(end);
    onChange(newValue);
  };

  return (
    <div className="h-full flex flex-col">
      <Toolbar onAction={handleToolbarAction} />
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 w-full p-4 bg-gray-50 font-mono text-sm resize-none focus:outline-none"
        placeholder="Enter your markdown here..."
      />
    </div>
  );
};

export default EditorPane;