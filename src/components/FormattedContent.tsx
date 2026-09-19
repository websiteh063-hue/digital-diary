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
      className={`prose prose-lg sm:prose-xl dark:prose-invert max-w-none text-stone-900 dark:text-stone-100 leading-relaxed [&_blockquote]:text-xl [&_blockquote]:sm:text-2xl [&_blockquote]:font-serif [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-6 [&_blockquote]:pr-4 [&_blockquote]:py-4 [&_blockquote]:my-6 [&_blockquote]:bg-amber-500/15 [&_blockquote]:rounded-r-2xl [&_blockquote]:shadow-sm [&_p]:my-5 [&_p]:leading-relaxed [&_u]:decoration-amber-600/70 [&_u]:decoration-2 [&_u]:underline-offset-4 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
