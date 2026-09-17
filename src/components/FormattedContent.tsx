import React from 'react';

interface FormattedContentProps {
  content: string;
  className?: string;
  isHindi?: boolean;
}

export default function FormattedContent({ content, className = '', isHindi = false }: FormattedContentProps) {
  if (!content) return null;

  // Detect if content has HTML tags
  const isHtml = /<[a-z][\s\S]*>/i.test(content);

  if (isHtml) {
    return (
      <div 
        className={`prose dark:prose-invert max-w-none text-stone-900 dark:text-stone-100 leading-relaxed [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4 [&_blockquote]:bg-amber-500/10 [&_blockquote]:py-2 [&_blockquote]:rounded-r-2xl ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Fallback markdown parsing for non-HTML entries
  const stanzas = content.split(/\n\s*\n/);

  return (
    <div className={`space-y-6 ${className}`}>
      {stanzas.map((stanza, idx) => {
        const lines = stanza.split('\n');
        
        // Check if stanza is a blockquote
        const isQuote = lines.length > 0 && lines.every(line => line.trim().startsWith('>'));

        if (isQuote) {
          const cleanQuoteText = lines
            .map(l => l.replace(/^>\s*/, ''))
            .join('\n');

          return (
            <blockquote
              key={idx}
              className="my-4 pl-5 py-3 border-l-4 border-amber-500 bg-amber-500/10 dark:bg-amber-500/15 rounded-r-2xl italic font-serif text-stone-800 dark:text-stone-200"
            >
              {parseInlineFormatting(cleanQuoteText)}
            </blockquote>
          );
        }

        return (
          <p key={idx} className="leading-relaxed">
            {lines.map((line, lineIdx) => (
              <React.Fragment key={lineIdx}>
                {parseInlineFormatting(line)}
                {lineIdx < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

// Parses ***bold italic***, **bold**, *italic*
function parseInlineFormatting(text: string): React.ReactNode[] {
  const regex = /(\*\*\*.*?\*\*\*|___.*?___|\*\*.*?\*\*|__.*?__|(?<!\*)\*.*?\*(?!\*)|(?<!_)_.*?_(?!_))/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if ((part.startsWith('***') && part.endsWith('***')) || (part.startsWith('___') && part.endsWith('___'))) {
      const inner = part.slice(3, -3);
      return (
        <strong key={index} className="font-bold italic text-amber-950 dark:text-amber-200">
          {inner}
        </strong>
      );
    }
    if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('__') && part.endsWith('__'))) {
      const inner = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-stone-950 dark:text-stone-50">
          {inner}
        </strong>
      );
    }
    if ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) {
      const inner = part.slice(1, -1);
      return (
        <em key={index} className="italic text-stone-800 dark:text-stone-200">
          {inner}
        </em>
      );
    }
    return part;
  });
}
