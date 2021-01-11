import { Char } from './types/Char';

function* permute(
  chars: string[],
  n: number = chars.length
): Generator<string[]> {
  if (n <= 1) {
    yield chars.slice();
  } else {
    for (let i = 0; i < n; i++) {
      yield* permute(chars, n - 1);
      const j = n % 2 ? 0 : i;
      [chars[n - 1], chars[j]] = [chars[j], chars[n - 1]];
    }
  }
}

export const getPermutations = (chars: Char[]): string[] => {
  return Array.from(permute(chars))
    .map((perm) => perm.join(''))
    .filter((el, idx, self) => self.indexOf(el) === idx);
};
