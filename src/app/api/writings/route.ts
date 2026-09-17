import { NextResponse } from 'next/server';
import { getAllWritings, saveWriting } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const includeDrafts = searchParams.get('drafts') === 'true';
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const sort = searchParams.get('sort') || 'newest';

  let writings = getAllWritings(includeDrafts);

  if (category) {
    writings = writings.filter(w => w.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    writings = writings.filter(w => 
      w.title.toLowerCase().includes(q) || 
      w.content.toLowerCase().includes(q) ||
      w.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (sort === 'oldest') {
    writings.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  } else if (sort === 'most_read') {
    writings.sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
  } else {
    // default newest
    writings.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  return NextResponse.json({ success: true, data: writings });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title || !body.category || !body.content) {
      return NextResponse.json({ success: false, error: 'Title, category, and content are required.' }, { status: 400 });
    }

    const writing = saveWriting(body);
    return NextResponse.json({ success: true, data: writing }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || 'Failed to save writing' }, { status: 500 });
  }
}
