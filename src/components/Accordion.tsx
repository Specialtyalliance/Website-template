import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-surface-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 px-1 text-left group focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-heading-sm text-text-main group-hover:text-primary-teal transition-colors duration-300 pr-4">
          {title}
        </h3>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-primary-teal text-white rotate-0'
            : 'bg-surface-100 text-text-light group-hover:bg-primary-teal-50 group-hover:text-primary-teal rotate-0'
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-premium ${
          isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-text-light text-body leading-relaxed pl-1 pr-10">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleItemClick = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-card border border-surface-200 px-8">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openItems.includes(item.id)}
          onClick={() => handleItemClick(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
