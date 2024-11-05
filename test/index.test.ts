import {
  convertToLongMonth,
  convertToShortMonth,
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

describe('convertToShortMonth', () => {
  it('should be a function', () => {
    expect(convertToShortMonth).toEqual(expect.any(Function));
  });

  describe('Input date', () => {
    it('convert to day and year with 2 digit', () => {
      expect(convertToShortMonth(new Date('2024-11-04'), { numeric: false })).toBe(
        '04 พ.ย. 67'
      );
      expect(convertToShortMonth(new Date('2022-05-11'), { numeric: false })).toBe(
        '11 พ.ค. 65'
      );
      expect(convertToShortMonth(new Date('2023-01-23'), { numeric: false })).toBe(
        '23 ม.ค. 66'
      );
    });

    it('convert to day and year with numeric', () => {
      expect(convertToShortMonth(new Date('2024-11-04'), { numeric: true })).toBe(
        '4 พ.ย. 2567'
      );
      expect(convertToShortMonth(new Date('2022-05-11'), { numeric: true })).toBe(
        '11 พ.ค. 2565'
      );
      expect(convertToShortMonth(new Date('2023-01-23'), { numeric: true })).toBe(
        '23 ม.ค. 2566'
      );
    });
  });

  describe('Input date string', () => {
    it('convert to day and year with 2 digit', () => {
      expect(convertToShortMonth('2024-11-04', { numeric: false })).toBe('04 พ.ย. 67');
      expect(convertToShortMonth('2022-05-11', { numeric: false })).toBe('11 พ.ค. 65');
      expect(convertToShortMonth('2023-01-23', { numeric: false })).toBe('23 ม.ค. 66');
    });

    it('convert to day and year with numeric', () => {
      expect(convertToShortMonth('2024-11-04', { numeric: true })).toBe('4 พ.ย. 2567');
      expect(convertToShortMonth('2022-05-11', { numeric: true })).toBe('11 พ.ค. 2565');
      expect(convertToShortMonth('2023-01-23', { numeric: true })).toBe('23 ม.ค. 2566');
    });
  });
});

describe('convertToLongMonth', () => {
  it('should be a function', () => {
    expect(convertToLongMonth).toEqual(expect.any(Function));
  });

  describe('Input with digit', () => {
    it('convert to day and year with 2 digit', () => {
      expect(convertToLongMonth(new Date('2024-11-04'), { numeric: false })).toBe(
        '04 พฤศจิกายน 67'
      );
      expect(convertToLongMonth(new Date('2022-05-11'), { numeric: false })).toBe(
        '11 พฤษภาคม 65'
      );
      expect(convertToLongMonth(new Date('2023-01-23'), { numeric: false })).toBe(
        '23 มกราคม 66'
      );
    });

    it('convert to day and year with numeric', () => {
      expect(convertToLongMonth(new Date('2024-11-04'), { numeric: true })).toBe(
        '4 พฤศจิกายน 2567'
      );
      expect(convertToLongMonth(new Date('2022-05-11'), { numeric: true })).toBe(
        '11 พฤษภาคม 2565'
      );
      expect(convertToLongMonth(new Date('2023-01-23'), { numeric: true })).toBe(
        '23 มกราคม 2566'
      );
    });
  });

  describe('Input date string', () => {
    it('convert to day and year with 2 digit', () => {
      expect(convertToLongMonth('2024-11-04', { numeric: false })).toBe('04 พฤศจิกายน 67');
      expect(convertToLongMonth('2022-05-11', { numeric: false })).toBe('11 พฤษภาคม 65');
      expect(convertToLongMonth('2023-01-23', { numeric: false })).toBe('23 มกราคม 66');
    });

    it('convert to day and year with numeric', () => {
      expect(convertToLongMonth('2024-11-04', { numeric: true })).toBe('4 พฤศจิกายน 2567');
      expect(convertToLongMonth('2022-05-11', { numeric: true })).toBe('11 พฤษภาคม 2565');
      expect(convertToLongMonth('2023-01-23', { numeric: true })).toBe('23 มกราคม 2566');
    });
  });
});

describe('Bad Input date string', () => {
  it('YYYY/MM/DD', () => {
    expect(() => convertToShortMonth('2024/11/04', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
    expect(() => convertToShortMonth('11-05-2022', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
    expect(() => convertToShortMonth('23-01-2023', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
  });

  it('YYYY/MM/DD', () => {
    expect(() => convertToLongMonth('2024/11/04', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
    expect(() => convertToLongMonth('11-05-2022', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
    expect(() => convertToLongMonth('23-01-2023', { numeric: false })).toThrow(
      'Invalid date format. Please use YYYY-MM-DD format.'
    );
  });
});
