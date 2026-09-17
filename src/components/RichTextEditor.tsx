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
  Sparkles,
  Palette,
  Type
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const COLORS = [
  { name: 'Default Dark', color: '#1c1917' },
  { name: 'Amber Gold', color: '#d97706' },
  { name: 'Rosewood', color: '#be123c' },
  { name: 'Emerald', color: '#047857' },
  { name: 'Midnight', color: '#1e1b4b' },
  { name: 'Soft Muted', color: '#78716c' },
];

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your poem, quote, or story here...",
  minHeight = "320px"
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Sync value into contentEditable when value is loaded externally (e.g. edit mode)
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      // Only set innerHTML if content is genuinely different to avoid resetting cursor during live typing
      if (!isFocused || !editorRef.current.innerHTML.trim()) {
        editorRef.current.innerHTML = value || '';
      }
    }
  }, [value, isFocused]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command: string, valueArg: string | undefined = undefined) => {
    document.execCommand(command, false, valueArg);
    if (editorRef.current) {
      editorRef.current.focus();
      onChange(editorRef.current.innerHTML);
    }
  };

  const formatFontFamily = (fontName: string) => {
    if (fontName === 'calligraphy') {
      execCommand('fontName', 'Great Vibes, Cormorant Garamond, serif');
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

  // Extract clean text for character count
  const cleanCharCount = (editorRef.current?.innerText || '').replace(/\n/g, '').length;

  return (
    <div className="rounded-2xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 overflow-hidden shadow-sm transition-all focus-within:ring-2 focus-within:ring-amber-500/50">
      
      {/* RICH TEXT WYSIWYG TOOLBAR */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 p-2 bg-paper-100 dark:bg-stone-900 border-b border-stone-200/90 dark:border-stone-800 text-xs font-sans select-none">
        
        <div className="flex flex-wrap items-center gap-1">
          
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
            onClick={() => execCommand('bold')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-bold"
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>

          {/* Italic */}
          <button
            type="button"
            onClick={() => execCommand('italic')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 italic"
            title="Italic (Ctrl+I)"
          >
            <Italic className="w-4 h-4" />
          </button>

          {/* Underline */}
          <button
            type="button"
            onClick={() => execCommand('underline')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 underline"
            title="Underline (Ctrl+U)"
          >
            <Underline className="w-4 h-4" />
          </button>

          {/* Strikethrough */}
          <button
            type="button"
            onClick={() => execCommand('strikeThrough')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 line-through"
            title="Strikethrough"
          >
            <Strikethrough className="w-4 h-4" />
          </button>

          <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-700 mx-1" />

          {/* Text Color Picker */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-amber-600 dark:text-amber-400 flex items-center gap-1"
              title="Text Color"
            >
              <Palette className="w-4 h-4" />
            </button>

            {showColorPicker && (
              <div className="absolute top-full left-0 mt-1 p-2 bg-paper-50 dark:bg-stone-900 rounded-xl border border-stone-300 dark:border-stone-700 shadow-xl z-20 flex gap-1.5">
                {COLORS.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => {
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

          {/* Alignment Left */}
          <button
            type="button"
            onClick={() => execCommand('justifyLeft')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </button>

          {/* Alignment Center */}
          <button
            type="button"
            onClick={() => execCommand('justifyCenter')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </button>

          {/* Alignment Right */}
          <button
            type="button"
            onClick={() => execCommand('justifyRight')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Align Right"
          >
            <AlignRight className="w-4 h-4" />
          </button>

          <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-700 mx-1" />

          {/* Quote Block */}
          <button
            type="button"
            onClick={() => execCommand('formatBlock', '<blockquote>')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Quote Block"
          >
            <Quote className="w-4 h-4" />
          </button>

          {/* Lists */}
          <button
            type="button"
            onClick={() => execCommand('insertUnorderedList')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Bulleted List"
          >
            <List className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => execCommand('insertOrderedList')}
            className="p-1.5 rounded-lg hover:bg-stone-200/70 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          {/* Clear Formatting */}
          <button
            type="button"
            onClick={() => execCommand('removeFormat')}
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
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full focus:outline-none font-serif text-lg leading-relaxed text-stone-900 dark:text-stone-100 min-h-[300px] prose dark:prose-invert max-w-none [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-3 [&_blockquote]:bg-amber-500/10 [&_blockquote]:py-2 [&_blockquote]:rounded-r-xl"
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
