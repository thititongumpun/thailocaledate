import {
  convertToThaiLocale,
  FormatMonth,
  getThaiDay,
  validateDateFormat,
} from '../src';

describe('validateDateFormat', () => {
  it('should throw an error for invalid date format', () => {
    const invalidDate = '04-11-2024';

    expect(() => validateDateFormat(invalidDate)).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
  });

  it('should not throw an error for valid date format', () => {
    const validDate = '2024-11-04';

    expect(() => validateDateFormat(validDate)).not.toThrow();
    expect(validateDateFormat(validDate)).toBe(true);
  });
});

describe('convertToThaiLocale', () => {
  it('should be a function', () => {
    expect(convertToThaiLocale).toEqual(expect.any(Function));
  });

  describe('Input date', () => {
    it('convert to day and year with 2 digit', () => {
      expect(
        convertToThaiLocale(new Date('2024-11-04'), { numeric: false })
      ).toBe('04 พ.ย. 67');
      expect(
        convertToThaiLocale(new Date('2022-05-11'), { numeric: false })
      ).toBe('11 พ.ค. 65');
      expect(
        convertToThaiLocale(new Date('2023-01-23'), { numeric: false })
      ).toBe('23 ม.ค. 66');
    });

    it('convert to day and year with numeric', () => {
      expect(
        convertToThaiLocale(new Date('2024-11-04'), { numeric: true })
      ).toBe('4 พ.ย. 2567');
      expect(
        convertToThaiLocale(new Date('2022-05-11'), { numeric: true })
      ).toBe('11 พ.ค. 2565');
      expect(
        convertToThaiLocale(new Date('2023-01-23'), { numeric: true })
      ).toBe('23 ม.ค. 2566');
    });
  });

  it('convert to day and year with 2 digit long month format', () => {
    expect(
      convertToThaiLocale(new Date('2024-11-04'), {
        numeric: false,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('04 พฤศจิกายน 67');
    expect(
      convertToThaiLocale(new Date('2022-05-11'), {
        numeric: false,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('11 พฤษภาคม 65');
    expect(
      convertToThaiLocale(new Date('2023-01-23'), {
        numeric: false,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('23 มกราคม 66');
  });

  it('convert to day and year with numeric long month format', () => {
    expect(
      convertToThaiLocale(new Date('2024-11-04'), {
        numeric: true,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('4 พฤศจิกายน 2567');
    expect(
      convertToThaiLocale(new Date('2022-05-11'), {
        numeric: true,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('11 พฤษภาคม 2565');
    expect(
      convertToThaiLocale(new Date('2023-01-23'), {
        numeric: true,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('23 มกราคม 2566');
  });
});

describe('Input date string', () => {
  it('convert to day and year with 2 digit', () => {
    expect(convertToThaiLocale('2024-11-04', { numeric: false })).toBe(
      '04 พ.ย. 67'
    );
    expect(convertToThaiLocale('2022-05-11', { numeric: false })).toBe(
      '11 พ.ค. 65'
    );
    expect(convertToThaiLocale('2023-01-23', { numeric: false })).toBe(
      '23 ม.ค. 66'
    );
  });

  it('convert to day and year with numeric', () => {
    expect(convertToThaiLocale('2024-11-04', { numeric: true })).toBe(
      '4 พ.ย. 2567'
    );
    expect(convertToThaiLocale('2022-05-11', { numeric: true })).toBe(
      '11 พ.ค. 2565'
    );
    expect(convertToThaiLocale('2023-01-23', { numeric: true })).toBe(
      '23 ม.ค. 2566'
    );
  });

  it('convert to day and year with 2 digit long month format', () => {
    expect(
      convertToThaiLocale('2024-11-04', {
        numeric: false,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('04 พฤศจิกายน 67');
    expect(
      convertToThaiLocale('2022-05-11', {
        numeric: false,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('11 พฤษภาคม 65');
    expect(
      convertToThaiLocale('2023-01-23', {
        numeric: false,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('23 มกราคม 66');
  });

  it('convert to day and year with numeric long month format', () => {
    expect(
      convertToThaiLocale('2024-11-04', {
        numeric: true,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('4 พฤศจิกายน 2567');
    expect(
      convertToThaiLocale('2022-05-11', {
        numeric: true,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('11 พฤษภาคม 2565');
    expect(
      convertToThaiLocale('2023-01-23', {
        numeric: true,
        formatMonth: FormatMonth.Long,
      })
    ).toBe('23 มกราคม 2566');
  });
});

describe('Bad Input date string', () => {
  it('YYYY/MM/DD', () => {
    expect(() => convertToThaiLocale('2024/11/04', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
    expect(() => convertToThaiLocale('11-05-2022', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
    expect(() => convertToThaiLocale('23-01-2023', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
  });
});

describe('Get Locale Thai day', () => {
  it('Input date must return string locale day', () => {
    expect(getThaiDay(new Date('2024-11-05'), { format: 'long' })).toBe(
      'วันอังคาร'
    );
    expect(getThaiDay(new Date('2022-01-15'), { format: 'long' })).toBe(
      'วันเสาร์'
    );
    expect(getThaiDay(new Date('1993-05-18'), { format: 'long' })).toBe(
      'วันอังคาร'
    );
    expect(getThaiDay(new Date('1993-05-18'), { format: 'short' })).toBe('อ.');
  });
});
