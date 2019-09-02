import { getLocale } from './locales';

const formatterCache = {};

/**
 * Gets Intl-based date formatter from formatter cache. If it doesn't exist in cache
 * just yet, it will be created on the fly.
 */
const getFormatter = (options, locales = getLocale()) => {
  const stringifiedOptions = JSON.stringify(options);

  if (!formatterCache[locales]) {
    formatterCache[locales] = {};
  }

  if (!formatterCache[locales][stringifiedOptions]) {
    formatterCache[locales][stringifiedOptions] = new Intl.DateTimeFormat(locales, options).format;
  }

  return formatterCache[locales][stringifiedOptions];
};

export const formatDate = date => getFormatter(
  { day: '2-digit', month: '2-digit', year: 'numeric' },
)(date);

export const formatTime = date => getFormatter(
  { hour: '2-digit', minute: '2-digit', second: '2-digit' },
)(date);

export const formatDateTime = date => getFormatter({
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})(date);
