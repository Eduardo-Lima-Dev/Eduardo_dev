import { getRequestConfig } from 'next-intl/server';
import type { GetRequestConfigParams } from 'next-intl/server';

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => ({
  locale: locale || 'pt',
  messages: (await import(`../messages/${locale || 'pt'}.json`)).default
})); 