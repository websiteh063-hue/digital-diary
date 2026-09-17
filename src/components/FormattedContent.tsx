import React from 'react';
import { normalizeContentToHtml } from '@/lib/contentFormatter';

interface FormattedContentProps {
  content: string;
  className?: string;
  isHindi?: boolean;
}

export default function FormattedContent({ content, className = '', isHindi = false }: FormattedContentProps) {
  if (!content) return null;

  const html = normalizeContentToHtml(content);

  return (
    <div 
      className={`prose dark:prose-invert max-w-none text-stone-900 dark:text-stone-100 leading-relaxed [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500/80 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:my-5 [&_blockquote]:bg-amber-500/10 [&_blockquote]:py-3 [&_blockquote]:rounded-r-2xl [&_p]:my-4 [&_u]:decoration-amber-600/70 [&_u]:decoration-2 [&_u]:underline-offset-4 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
