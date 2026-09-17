import { NextResponse } from 'next/server';
import { incrementViewCount } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    if (id) {
      incrementViewCount(id);
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
