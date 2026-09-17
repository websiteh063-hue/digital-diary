import { NextResponse } from 'next/server';
import { getWritingById, saveWriting, deleteWriting } from '@/lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const writing = getWritingById(params.id);
  if (!writing) {
    return NextResponse.json({ success: false, error: 'Writing not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: writing });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const writing = saveWriting({ ...body, id: params.id });
    return NextResponse.json({ success: true, data: writing });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const deleted = deleteWriting(params.id);
  if (!deleted) {
    return NextResponse.json({ success: false, error: 'Writing not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, message: 'Deleted successfully' });
}
