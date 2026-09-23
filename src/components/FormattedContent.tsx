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
      className={`prose prose-xl sm:prose-2xl dark:prose-invert max-w-none text-stone-950 dark:text-stone-50 text-xl sm:text-2xl font-medium leading-relaxed sm:leading-loose [&_blockquote]:text-2xl [&_blockquote]:sm:text-3xl [&_blockquote]:font-semibold [&_blockquote]:font-serif [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-6 [&_blockquote]:pr-4 [&_blockquote]:py-4 [&_blockquote]:my-6 [&_blockquote]:bg-amber-500/20 [&_blockquote]:text-stone-950 [&_blockquote]:dark:text-stone-50 [&_blockquote]:rounded-r-2xl [&_blockquote]:shadow-sm [&_p]:my-6 [&_p]:leading-relaxed [&_p]:sm:leading-loose [&_u]:decoration-amber-600 [&_u]:decoration-2 [&_u]:underline-offset-4 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
