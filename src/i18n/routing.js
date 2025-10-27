import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'it', 'zh'],
  localePrefix: 'always',
  localeDetection: false,
  defaultLocale: 'en',
});
