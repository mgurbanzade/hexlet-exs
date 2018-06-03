const dnaToRna = (dna) => {
  const nucleotides = ['A', 'C', 'G', 'T', 'U'];
  let rna = [];

  if (dna === '') return '';

  for (let i = 0; i < dna.length; i += 1) {
    if (nucleotides.includes(dna[i])) {
      dna[i] === 'G' ? rna.push('C') :
      dna[i] === 'C' ? rna.push('G') :
      dna[i] === 'T' ? rna.push('A') : rna.push('U');
    } else {
      return rna = null;
    }
  }

  return rna.join('');
}

dnaToRna('ACGTGGTCTTAA');
