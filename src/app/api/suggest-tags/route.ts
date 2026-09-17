import { NextResponse } from 'next/server';
import { generateSuggestedTags, detectCategory } from '@/lib/tagging';

export async function POST(request: Request) {
  try {
    const { title, content, category } = await request.json();
    const tags = generateSuggestedTags(title || '', content || '', category || '');
    const suggestedCategory = detectCategory(title || '', content || '');
    return NextResponse.json({ success: true, tags, category: suggestedCategory });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

