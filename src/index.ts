import { getPermutations } from './getPermutations';
import { Char } from './types/Char';

function main(chars: Char[]) {
  const permutations = getPermutations(chars);

  console.log('----------------------------');
  console.log(permutations);
  console.log('----------------------------');
}

main('zabp'.split('') as never);
