import { ConvertOptions } from './types';

export enum FormatMonth {
  Short,
  Long,
}

export const validateDateFormat = (input: string): Boolean => {
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateFormat.test(input)) {
    throw new Error('Invalid date format. Please use YYYY-MM-DD format.');
  }

  return true;
};

export const convertToThaiLocale = (
  input: Date | string,
  opts: ConvertOptions = { numeric: false }
): string => {
  const { formatMonth = FormatMonth.Short, numeric } = opts;
  if (typeof input === 'string' || input instanceof String) {
    if (!validateDateFormat(input as string)) {
      throw new Error('Invalid date format. Please use YYYY-MM-DD format.');
    }

    input = new Date(input);
  }

  return input.toLocaleDateString('th-TH', {
    year: numeric ? 'numeric' : '2-digit',
    month: formatMonth === FormatMonth.Short ? 'short' : 'long',
    day: numeric ? 'numeric' : '2-digit',
  });
};
