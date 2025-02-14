import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'es', 'pt']

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !locales.includes(locale)) {
    locale = 'en'
  }

  return {
    messages: (await import(`./translation/${locale}.json`)).default
  }
})
