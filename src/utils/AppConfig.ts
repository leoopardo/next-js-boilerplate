import { ptBR, esMX } from '@clerk/localizations';
import type { LocalizationResource } from '@clerk/shared/types';
import type { LocalePrefixMode } from 'next-intl/routing';

/** Locale prefix strategy for next-intl routing. */
const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Customize this configuration for your product
/** Centralized application configuration */
export const AppConfig = {
  name: 'Nextjs Starter',
  i18n: {
    locales: ['br', 'mx'],
    defaultLocale: 'br',
    localePrefix,
  },
};

const supportedLocales: Record<string, LocalizationResource> = {
  br: ptBR,
  mx: esMX,
};

/** @public */
export const ClerkLocalizations = {
  defaultLocale: ptBR,
  supportedLocales,
};
