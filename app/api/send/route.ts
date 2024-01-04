import { NextResponse } from 'next/server';

import { Resend } from 'resend';

import { EmailTemplate } from '@/emails/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new NextResponse('Missing name, email or message', { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: 'Gabriel Espindola <website@gabrielluizep.dev>',
    to: ['gabrielluizep.glep@gmail.com', email],
    subject: 'Contact Form - gabrielluizep.dev',
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    return new NextResponse('Error sending email', { status: 500 });
  }

  return new NextResponse('Email sent', { status: 200 });
}
