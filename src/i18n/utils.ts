import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getUrlWithoutLang(url: URL) {
  const path = url.pathname.split('/');
  const lang = path[1]
  
  if (lang in ui) return {
    path: `/${path.slice(2).join("/")}`,
    i18n: true 
  };
  return {
    path: url.pathname,
    i18n: false
  }
}