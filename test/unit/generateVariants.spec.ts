import { getPermutations } from '../../src/generateVariants';

describe('generateVariants', () => {
  it('should generate all possible outputs', () => {
    expect(getPermutations(['a', 'b', 'c'])).toEqual([
      'abc',
      'bac',
      'cab',
      'acb',
      'bca',
      'cba',
    ]);
  });
});
