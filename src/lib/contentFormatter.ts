export function normalizeContentToHtml(content: string): string {
  if (!content) return '';

  // If already rich HTML (contains <p>, <b>, <strong>, <i>, <em>, <u>, blockquote), return as is
  const isHtml = /<[a-z][\s\S]*>/i.test(content);
  if (isHtml) {
    return content;
  }

  // Convert plain text / legacy markdown to clean HTML
  const stanzas = content.split(/\n\s*\n/);
  const htmlParts = stanzas.map(stanza => {
    const lines = stanza.split('\n');
    const isQuote = lines.length > 0 && lines.every(l => l.trim().startsWith('>'));

    if (isQuote) {
      const cleanQuote = lines.map(l => l.replace(/^>\s*/, '')).join('<br/>');
      return `<blockquote>${parseMarkdownInline(cleanQuote)}</blockquote>`;
    }

    const formattedLines = lines.map(line => parseMarkdownInline(line));
    return `<p>${formattedLines.join('<br/>')}</p>`;
  });

  return htmlParts.join('');
}

function parseMarkdownInline(text: string): string {
  return text
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/___(.*?)___/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*(.*?)\*(?!\*)/g, '<em>$1</em>')
    .replace(/(?<!_)_(.*?)_(?!_)/g, '<em>$1</em>');
}
