'use client';

import React, { useRef, useEffect, useState } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Quote, 
  List, 
  ListOrdered, 
  RemoveFormatting, 
  Palette, 
  Highlighter,
  Sparkles
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const TEXT_COLORS = [
  { name: 'Default Dark', color: '#1c1917' },
  { name: 'Amber Gold', color: '#d97706' },
  { name: 'Rosewood', color: '#be123c' },
  { name: 'Emerald', color: '#047857' },
  { name: 'Midnight', color: '#1e1b4b' },
  { name: 'Soft Muted', color: '#78716c' },
];

const HIGHLIGHT_COLORS = [
  { name: 'Yellow', color: '#fef08a' },
  { name: 'Amber Glow', color: '#fde68a' },
  { name: 'Rose Tint', color: '#fecdd3' },
  { name: 'Mint Green', color: '#bbf7d0' },
  { name: 'Sky Blue', color: '#bfdbfe' },
  { name: 'Remove Highlight', color: 'transparent' },
];

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your poem, quote, or story here...",
  minHeight = "340px"
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);
  
  // Active formatting state indicators
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    blockquote: false,
  });

  // Floating bubble selection menu position state
  const [bubblePosition, setBubblePosition] = useState<{ top: number; left: number } | null>(null);

  // Sync value into contentEditable when loaded externally
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      if (!isFocused || !editorRef.current.innerHTML.trim()) {
        editorRef.current.innerHTML = value || '';
      }
    }
  }, [value, isFocused]);

  // Track selection change & active format state
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();

      // Update active formatting states
      try {
        const isBold = document.queryCommandState('bold');
        const isItalic = document.queryCommandState('italic');
        const isUnderline = document.queryCommandState('underline');
        const isStrikeThrough = document.queryCommandState('strikeThrough');
        
        let isBlockquote = false;
        if (selection && selection.anchorNode) {
          let node: Node | null = selection.anchorNode;
          while (node && node !== editorRef.current) {
            if (node.nodeName === 'BLOCKQUOTE') {
              isBlockquote = true;
              break;
            }
            node = node.parentNode;
          }
        }

        setActiveFormats({
          bold: isBold,
          italic: isItalic,
          underline: isUnderline,
          strikeThrough: isStrikeThrough,
          blockquote: isBlockquote,
        });
      } catch (err) {
        // Ignore queryCommandState edge cases
      }

      // Handle floating bubble position
      if (!selection || selection.isCollapsed || !editorRef.current) {
        setBubblePosition(null);
        return;
      }

      if (!editorRef.current.contains(selection.anchorNode)) {
        setBubblePosition(null);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const editorRect = editorRef.current.getBoundingClientRect();

      if (rect.width > 0) {
        setBubblePosition({
          top: rect.top - editorRect.top - 48,
          left: rect.left - editorRect.left + rect.width / 2 - 120,
        });
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // Keyboard shortcut listener (Ctrl+B, Ctrl+I, Ctrl+U)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        execCommand('bold');
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        execCommand('italic');
      } else if (e.key === 'u' || e.key === 'U') {
        e.preventDefault();
        execCommand('underline');
      }
    }
  };

  // Keep selection active by using onMouseDown={(e) => e.preventDefault()}
  const execCommand = (command: string, valueArg: string | undefined = undefined) => {
    document.execCommand(command, false, valueArg);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertStanzaBreak = () => {
    execCommand('insertParagraph');
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const formatFontFamily = (fontName: string) => {
    if (fontName === 'calligraphy') {
      execCommand('fontName', 'Dancing Script, Satisfy, Cormorant Garamond, serif');
    } else if (fontName === 'serif') {
      execCommand('fontName', 'Cormorant Garamond, Georgia, serif');
    } else if (fontName === 'display') {
      execCommand('fontName', 'Playfair Display, Georgia, serif');
    } else if (fontName === 'hindi') {
      execCommand('fontName', 'Noto Serif Devanagari, serif');
    } else {
      execCommand('fontName', 'Plus Jakarta Sans, sans-serif');
    }
  };

  const formatHeader = (tag: string) => {
    if (tag === 'p') {
      execCommand('formatBlock', '<p>');
    } else if (tag === 'blockquote') {
      execCommand('formatBlock', '<blockquote>');
    } else {
      execCommand('formatBlock', `<${tag}>`);
    }
  };

  const cleanCharCount = (editorRef.current?.innerText || '').replace(/\n/g, '').length;

  return (
    <div className="rounded-2xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 overflow-hidden shadow-sm transition-all focus-within:ring-2 focus-within:ring-amber-500/50 relative">
      
      {/* RICH TEXT WYSIWYG TOOLBAR */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 p-2.5 bg-paper-100 dark:bg-stone-900 border-b border-stone-200/90 dark:border-stone-800 text-xs font-sans select-none">
        
        <div className="flex flex-wrap items-center gap-1.5">
          
          {/* Font Family Dropdown */}
          <div className="relative inline-block">
            <select
              onChange={(e) => formatFontFamily(e.target.value)}
              className="px-2.5 py-1 rounded-lg border border-stone-300/80 dark:border-stone-700 bg-paper-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 text-xs focus:outline-none cursor-pointer"
              title="Change Font Family"
            >
              <option value="serif">Cormorant Serif</option>
              <option value="calligraphy">✨ Calligraphy Script</option>
              <option value="display">Playfair Display</option>
              <option value="hindi">Noto Hindi</option>
              <option value="sans">Sans Serif</option>
            </select>
          </div>

          {/* Text Style / Heading Dropdown */}
          <div className="relative inline-block">
            <select
              onChange={(e) => formatHeader(e.target.value)}
              className="px-2.5 py-1 rounded-lg border border-stone-300/80 dark:border-stone-700 bg-paper-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 text-xs focus:outline-none cursor-pointer"
              title="Text Size / Block Format"
            >
              <option value="p">Normal Text</option>
              <option value="h2">Heading 1</option>
              <option value="h3">Heading 2</option>
              <option value="blockquote">Quote Block</option>
            </select>
          </div>

          <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-700 mx-1" />

          {/* Bold */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('bold'); }}
            className={`px-2.5 py-1 rounded-lg font-bold transition-colors border ${
              activeFormats.bold 
                ? 'bg-amber-500/25 text-amber-950 dark:text-amber-200 border-amber-500/50 shadow-sm' 
                : 'hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border-transparent'
            }`}
            title="Bold selected text (Ctrl+B)"
          >
            <span className="flex items-center gap-1"><Bold className="w-3.5 h-3.5" /> Bold</span>
          </button>

          {/* Italic */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('italic'); }}
            className={`px-2.5 py-1 rounded-lg italic transition-colors border ${
              activeFormats.italic 
                ? 'bg-amber-500/25 text-amber-950 dark:text-amber-200 border-amber-500/50 shadow-sm font-semibold' 
                : 'hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border-transparent'
            }`}
            title="Italicize selected text (Ctrl+I)"
          >
            <span className="flex items-center gap-1"><Italic className="w-3.5 h-3.5" /> Italic</span>
          </button>

          {/* Underline */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('underline'); }}
            className={`px-2.5 py-1 rounded-lg underline transition-colors border ${
              activeFormats.underline 
                ? 'bg-amber-500/25 text-amber-950 dark:text-amber-200 border-amber-500/50 shadow-sm font-semibold' 
                : 'hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border-transparent'
            }`}
            title="Underline selected text (Ctrl+U)"
          >
            <span className="flex items-center gap-1"><Underline className="w-3.5 h-3.5" /> Underline</span>
          </button>

          {/* Quote Block */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('formatBlock', 'blockquote'); }}
            className={`px-2.5 py-1 rounded-lg transition-colors border ${
              activeFormats.blockquote 
                ? 'bg-amber-500/25 text-amber-950 dark:text-amber-200 border-amber-500/50 shadow-sm font-semibold' 
                : 'hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border-transparent'
            }`}
            title="Quote Block"
          >
            <span className="flex items-center gap-1"><Quote className="w-3.5 h-3.5" /> Quote</span>
          </button>

          {/* Stanza Break */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); insertStanzaBreak(); }}
            className="px-2.5 py-1 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300/60 dark:border-stone-700/60"
            title="Insert Poetry Stanza Break"
          >
            <span className="flex items-center gap-1"><AlignLeft className="w-3.5 h-3.5" /> Stanza Break</span>
          </button>

          {/* Strikethrough */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('strikeThrough'); }}
            className={`p-1.5 rounded-lg line-through transition-colors border ${
              activeFormats.strikeThrough 
                ? 'bg-amber-500/25 text-amber-950 dark:text-amber-200 border-amber-500/50' 
                : 'hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 border-transparent'
            }`}
            title="Strikethrough"
          >
            <Strikethrough className="w-4 h-4" />
          </button>

          <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-700 mx-1" />

          {/* Highlight Marker */}
          <div className="relative">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowHighlightPicker(!showHighlightPicker)}
              className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-amber-600 dark:text-amber-400 flex items-center gap-1 bg-amber-400/20"
              title="Highlight Marker (Yellow/Colors)"
            >
              <Highlighter className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            </button>

            {showHighlightPicker && (
              <div className="absolute top-full left-0 mt-1 p-2 bg-paper-50 dark:bg-stone-900 rounded-xl border border-stone-300 dark:border-stone-700 shadow-xl z-30 flex items-center gap-1.5">
                {HIGHLIGHT_COLORS.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      execCommand('hiliteColor', c.color);
                      setShowHighlightPicker(false);
                    }}
                    className="w-5 h-5 rounded-full border border-stone-300 dark:border-stone-600 hover:scale-110 transition-transform"
                    style={{ backgroundColor: c.color }}
                    title={c.name}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Text Color Picker */}
          <div className="relative">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center gap-1"
              title="Text Color"
            >
              <Palette className="w-4 h-4" />
            </button>

            {showColorPicker && (
              <div className="absolute top-full left-0 mt-1 p-2 bg-paper-50 dark:bg-stone-900 rounded-xl border border-stone-300 dark:border-stone-700 shadow-xl z-30 flex items-center gap-1.5">
                {TEXT_COLORS.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      execCommand('foreColor', c.color);
                      setShowColorPicker(false);
                    }}
                    className="w-5 h-5 rounded-full border border-stone-300 dark:border-stone-600 hover:scale-110 transition-transform"
                    style={{ backgroundColor: c.color }}
                    title={c.name}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-700 mx-1" />

          {/* Alignment Controls */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('justifyLeft'); }}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('justifyCenter'); }}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </button>

          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('justifyRight'); }}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Align Right"
          >
            <AlignRight className="w-4 h-4" />
          </button>

          <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-700 mx-1" />

          {/* Lists */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('insertUnorderedList'); }}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Bulleted List"
          >
            <List className="w-4 h-4" />
          </button>

          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('insertOrderedList'); }}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          {/* Clear Formatting */}
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); execCommand('removeFormat'); }}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-red-600 dark:text-red-400"
            title="Clear Formatting"
          >
            <RemoveFormatting className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-stone-400 font-mono pr-2">
          <span>{cleanCharCount} chars</span>
        </div>

      </div>

      {/* VISUAL RICH CONTENTEDITABLE AREA */}
      <div className="relative p-5">
        
        {/* FLOATING BUBBLE TOOLBAR ON HIGHLIGHTED TEXT */}
        {bubblePosition && (
          <div 
            className="absolute z-40 bg-stone-900 text-stone-50 rounded-xl px-2 py-1 shadow-2xl border border-stone-700 flex items-center gap-1.5 animate-fade-in select-none"
            style={{ 
              top: `${Math.max(10, bubblePosition.top)}px`, 
              left: `${Math.max(10, bubblePosition.left)}px` 
            }}
          >
            <button
              type="button"
              onMouseDown={(e) => { e.preventDefault(); execCommand('bold'); }}
              className={`p-1.5 hover:bg-stone-800 rounded font-bold ${activeFormats.bold ? 'text-amber-400' : ''}`}
              title="Bold"
            >
              <Bold className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onMouseDown={(e) => { e.preventDefault(); execCommand('italic'); }}
              className={`p-1.5 hover:bg-stone-800 rounded italic ${activeFormats.italic ? 'text-amber-400' : ''}`}
              title="Italic"
            >
              <Italic className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onMouseDown={(e) => { e.preventDefault(); execCommand('underline'); }}
              className={`p-1.5 hover:bg-stone-800 rounded underline ${activeFormats.underline ? 'text-amber-400' : ''}`}
              title="Underline"
            >
              <Underline className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onMouseDown={(e) => { e.preventDefault(); execCommand('hiliteColor', '#fef08a'); }}
              className="p-1.5 hover:bg-stone-800 rounded text-amber-300 flex items-center gap-1"
              title="Highlight Yellow"
            >
              <Highlighter className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onMouseDown={(e) => { e.preventDefault(); execCommand('formatBlock', 'blockquote'); }}
              className={`p-1.5 hover:bg-stone-800 rounded ${activeFormats.blockquote ? 'text-amber-400' : ''}`}
              title="Quote"
            >
              <Quote className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full focus:outline-none font-serif text-lg leading-relaxed text-stone-900 dark:text-stone-100 min-h-[320px] prose dark:prose-invert max-w-none [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-3 [&_blockquote]:bg-amber-500/10 [&_blockquote]:py-2 [&_blockquote]:rounded-r-xl [&_u]:decoration-amber-500 [&_u]:decoration-2 [&_u]:underline-offset-4"
          style={{ minHeight }}
        />

        {/* Empty Placeholder overlay */}
        {(!value || value === '<br>' || value === '<p></p>') && !isFocused && (
          <div 
            onClick={() => editorRef.current?.focus()}
            className="absolute top-5 left-5 pointer-events-none text-stone-400 font-serif italic text-lg select-none"
          >
            {placeholder}
          </div>
        )}
      </div>

    </div>
  );
}
