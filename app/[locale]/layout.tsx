import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import LangSetter from '@/components/LangSetter';
import { locales } from '@/i18n';

export const metadata: Metadata = {
  title: 'Core Coaching & Training Solutions',
  description: 'Professional coaching and training solutions for individuals and organizations',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LangSetter />
      {children}
    </NextIntlClientProvider>
  );
}
