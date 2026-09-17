import { NextResponse } from 'next/server';
import { updateSettings } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    
    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = file.type || 'image/png';
    const base64Image = `data:${mimeType};base64,${buffer.toString('base64')}`;

    // Save as current default signature
    const settings = updateSettings({ signature_image: base64Image });

    return NextResponse.json({ success: true, data: settings, signature_url: base64Image });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || 'Signature upload failed' }, { status: 500 });
  }
}
