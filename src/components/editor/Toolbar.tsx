import React from 'react';
import { Bold, Italic, List, Link, Code, Image, Quote } from 'lucide-react';

interface ToolbarProps {
  onAction: (action: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAction }) => {
  const tools = [
    { icon: <Bold className="w-4 h-4" />, action: 'bold', tooltip: 'Bold' },
    { icon: <Italic className="w-4 h-4" />, action: 'italic', tooltip: 'Italic' },
    { icon: <List className="w-4 h-4" />, action: 'list', tooltip: 'List' },
    { icon: <Link className="w-4 h-4" />, action: 'link', tooltip: 'Link' },
    { icon: <Code className="w-4 h-4" />, action: 'code', tooltip: 'Code' },
    { icon: <Image className="w-4 h-4" />, action: 'image', tooltip: 'Image' },
    { icon: <Quote className="w-4 h-4" />, action: 'quote', tooltip: 'Quote' },
  ];

  return (
    <div className="flex items-center space-x-2 p-2 border-b border-gray-200">
      {tools.map(({ icon, action, tooltip }) => (
        <button
          key={action}
          onClick={() => onAction(action)}
          className="p-2 rounded hover:bg-gray-100 text-gray-600 hover:text-blue-600"
          title={tooltip}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;