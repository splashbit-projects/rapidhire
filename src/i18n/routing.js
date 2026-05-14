import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en'],
  localePrefix: 'never',
  localeDetection: false,
  defaultLocale: 'en',
});
