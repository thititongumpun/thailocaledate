import { ConvertOptions } from "./types";

export const validateDateFormat = (input: string): Boolean => {
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateFormat.test(input)) {
    throw new Error('Invalid date format. Please use YYYY-MM-DD format.');
  }

  return true;
};

export const convertToShortMonth = (
  input: Date | string,
  opt?: ConvertOptions
): string => {
  if (typeof input === 'string' || input instanceof String) {
    if (!validateDateFormat(input as string)) {
      throw new Error('Invalid date format. Please use YYYY-MM-DD format.');
    }

    input = new Date(input);
  }

  return input.toLocaleDateString('th-TH', {
    year: opt?.numeric ? 'numeric' : '2-digit',
    month: 'short',
    day: opt?.numeric ? 'numeric' : '2-digit',
  });
};

export const convertToLongMonth = (
  input: Date | string,
  opt?: ConvertOptions
): string => {
  if (typeof input === 'string' || input instanceof String) {
    if (!validateDateFormat(input as string)) {
      throw new Error('Invalid date format. Please use YYYY-MM-DD format.');
    }

    input = new Date(input);
  }

  return input.toLocaleDateString('th-TH', {
    year: opt?.numeric ? 'numeric' : '2-digit',
    month: 'long',
    day: opt?.numeric ? 'numeric' : '2-digit',
  });
};
