import { NextResponse } from 'next/server';
import { generateSuggestedTags } from '@/lib/tagging';

export async function POST(request: Request) {
  try {
    const { title, content, category } = await request.json();
    const tags = generateSuggestedTags(title || '', content || '', category || '');
    return NextResponse.json({ success: true, tags });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
