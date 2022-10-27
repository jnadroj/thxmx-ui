import { describe, it } from 'vitest';
import { convertHexToRGBA } from '@/utils';

describe('convertHexToRGBA', () => {
  it('should convert hex to rgba', () => {
    const hexColor = '#000000';
    const alpha = 0.5;
    const rgbaColor = convertHexToRGBA(hexColor, alpha);
    expect(rgbaColor).toBe('rgba(0,0,0,0.5)');
  });

  it('should convert hex to rgba with default alpha', () => {
    const hexColor = '#000000';
    const rgbaColor = convertHexToRGBA(hexColor);
    expect(rgbaColor).toBe('rgba(0,0,0,1)');
  });
});
