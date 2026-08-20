import type { routing } from '@/libs/I18nRouting';
import type messages from '@/locales/br/default.json';

declare module 'next-intl' {
  // oxlint-disable-next-line typescript/consistent-type-definitions
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
