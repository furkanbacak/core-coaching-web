import { NextResponse } from 'next/server';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_LEVEL_REQUEST_ID;

export async function POST(request: Request) {
  if (!FORMSPREE_ID) {
    return NextResponse.json(
      { error: 'Formspree not configured' },
      { status: 503 }
    );
  }
  try {
    const formData = await request.formData();
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(data || { error: 'Formspree error' }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: 'Submission failed' },
      { status: 500 }
    );
  }
}
